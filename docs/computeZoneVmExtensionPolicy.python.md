# `computeZoneVmExtensionPolicy` Submodule <a name="`computeZoneVmExtensionPolicy` Submodule" id="@cdktn/provider-google.computeZoneVmExtensionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeZoneVmExtensionPolicy <a name="ComputeZoneVmExtensionPolicy" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy google_compute_zone_vm_extension_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer"></a>

```python
from cdktn_provider_google import compute_zone_vm_extension_policy

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  extension_policies: IResolvable | typing.List[ComputeZoneVmExtensionPolicyExtensionPolicies],
  name: str,
  zone: str,
  deletion_policy: str = None,
  description: str = None,
  instance_selectors: IResolvable | typing.List[ComputeZoneVmExtensionPolicyInstanceSelectors] = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  timeouts: ComputeZoneVmExtensionPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.extensionPolicies">extension_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>]</code> | extension_policies block. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. Provided by the client when the resource is created. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Name of the zone for this request. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.instanceSelectors">instance_selectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>]</code> | instance_selectors block. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority of this policy. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#project ComputeZoneVmExtensionPolicy#project}. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `extension_policies`<sup>Required</sup> <a name="extension_policies" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.extensionPolicies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>]

extension_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#extension_policies ComputeZoneVmExtensionPolicy#extension_policies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource. Provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#name ComputeZoneVmExtensionPolicy#name}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.zone"></a>

- *Type:* str

Name of the zone for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#zone ComputeZoneVmExtensionPolicy#zone}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#deletion_policy ComputeZoneVmExtensionPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#description ComputeZoneVmExtensionPolicy#description}

---

##### `instance_selectors`<sup>Optional</sup> <a name="instance_selectors" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.instanceSelectors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>]

instance_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#instance_selectors ComputeZoneVmExtensionPolicy#instance_selectors}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Priority of this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#priority ComputeZoneVmExtensionPolicy#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#project ComputeZoneVmExtensionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#timeouts ComputeZoneVmExtensionPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putExtensionPolicies">put_extension_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putInstanceSelectors">put_instance_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetInstanceSelectors">reset_instance_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_extension_policies` <a name="put_extension_policies" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putExtensionPolicies"></a>

```python
def put_extension_policies(
  value: IResolvable | typing.List[ComputeZoneVmExtensionPolicyExtensionPolicies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putExtensionPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>]

---

##### `put_instance_selectors` <a name="put_instance_selectors" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putInstanceSelectors"></a>

```python
def put_instance_selectors(
  value: IResolvable | typing.List[ComputeZoneVmExtensionPolicyInstanceSelectors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putInstanceSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#create ComputeZoneVmExtensionPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#delete ComputeZoneVmExtensionPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#update ComputeZoneVmExtensionPolicy#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_instance_selectors` <a name="reset_instance_selectors" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetInstanceSelectors"></a>

```python
def reset_instance_selectors() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComputeZoneVmExtensionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isConstruct"></a>

```python
from cdktn_provider_google import compute_zone_vm_extension_policy

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google import compute_zone_vm_extension_policy

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google import compute_zone_vm_extension_policy

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google import compute_zone_vm_extension_policy

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComputeZoneVmExtensionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeZoneVmExtensionPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeZoneVmExtensionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeZoneVmExtensionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.extensionPolicies">extension_policies</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList">ComputeZoneVmExtensionPolicyExtensionPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.instanceSelectors">instance_selectors</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList">ComputeZoneVmExtensionPolicyInstanceSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.managedByGlobal">managed_by_global</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference">ComputeZoneVmExtensionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.extensionPoliciesInput">extension_policies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.instanceSelectorsInput">instance_selectors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `extension_policies`<sup>Required</sup> <a name="extension_policies" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.extensionPolicies"></a>

```python
extension_policies: ComputeZoneVmExtensionPolicyExtensionPoliciesList
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList">ComputeZoneVmExtensionPolicyExtensionPoliciesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_selectors`<sup>Required</sup> <a name="instance_selectors" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.instanceSelectors"></a>

```python
instance_selectors: ComputeZoneVmExtensionPolicyInstanceSelectorsList
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList">ComputeZoneVmExtensionPolicyInstanceSelectorsList</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `managed_by_global`<sup>Required</sup> <a name="managed_by_global" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.managedByGlobal"></a>

```python
managed_by_global: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.timeouts"></a>

```python
timeouts: ComputeZoneVmExtensionPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference">ComputeZoneVmExtensionPolicyTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `extension_policies_input`<sup>Optional</sup> <a name="extension_policies_input" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.extensionPoliciesInput"></a>

```python
extension_policies_input: IResolvable | typing.List[ComputeZoneVmExtensionPolicyExtensionPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>]

---

##### `instance_selectors_input`<sup>Optional</sup> <a name="instance_selectors_input" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.instanceSelectorsInput"></a>

```python
instance_selectors_input: IResolvable | typing.List[ComputeZoneVmExtensionPolicyInstanceSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ComputeZoneVmExtensionPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a>

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeZoneVmExtensionPolicyConfig <a name="ComputeZoneVmExtensionPolicyConfig" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google import compute_zone_vm_extension_policy

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  extension_policies: IResolvable | typing.List[ComputeZoneVmExtensionPolicyExtensionPolicies],
  name: str,
  zone: str,
  deletion_policy: str = None,
  description: str = None,
  instance_selectors: IResolvable | typing.List[ComputeZoneVmExtensionPolicyInstanceSelectors] = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  timeouts: ComputeZoneVmExtensionPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.extensionPolicies">extension_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>]</code> | extension_policies block. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. Provided by the client when the resource is created. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.zone">zone</a></code> | <code>str</code> | Name of the zone for this request. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.instanceSelectors">instance_selectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>]</code> | instance_selectors block. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority of this policy. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#project ComputeZoneVmExtensionPolicy#project}. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `extension_policies`<sup>Required</sup> <a name="extension_policies" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.extensionPolicies"></a>

```python
extension_policies: IResolvable | typing.List[ComputeZoneVmExtensionPolicyExtensionPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>]

extension_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#extension_policies ComputeZoneVmExtensionPolicy#extension_policies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource. Provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#name ComputeZoneVmExtensionPolicy#name}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Name of the zone for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#zone ComputeZoneVmExtensionPolicy#zone}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#deletion_policy ComputeZoneVmExtensionPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#description ComputeZoneVmExtensionPolicy#description}

---

##### `instance_selectors`<sup>Optional</sup> <a name="instance_selectors" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.instanceSelectors"></a>

```python
instance_selectors: IResolvable | typing.List[ComputeZoneVmExtensionPolicyInstanceSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>]

instance_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#instance_selectors ComputeZoneVmExtensionPolicy#instance_selectors}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Priority of this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#priority ComputeZoneVmExtensionPolicy#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#project ComputeZoneVmExtensionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.timeouts"></a>

```python
timeouts: ComputeZoneVmExtensionPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#timeouts ComputeZoneVmExtensionPolicy#timeouts}

---

### ComputeZoneVmExtensionPolicyExtensionPolicies <a name="ComputeZoneVmExtensionPolicyExtensionPolicies" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.Initializer"></a>

```python
from cdktn_provider_google import compute_zone_vm_extension_policy

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies(
  extension_name: str,
  pinned_version: str = None,
  string_config: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.extensionName">extension_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#extension_name ComputeZoneVmExtensionPolicy#extension_name}. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.pinnedVersion">pinned_version</a></code> | <code>str</code> | The specific version of the extension to install. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.stringConfig">string_config</a></code> | <code>str</code> | String-based configuration data for the extension. |

---

##### `extension_name`<sup>Required</sup> <a name="extension_name" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.extensionName"></a>

```python
extension_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#extension_name ComputeZoneVmExtensionPolicy#extension_name}.

---

##### `pinned_version`<sup>Optional</sup> <a name="pinned_version" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.pinnedVersion"></a>

```python
pinned_version: str
```

- *Type:* str

The specific version of the extension to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#pinned_version ComputeZoneVmExtensionPolicy#pinned_version}

---

##### `string_config`<sup>Optional</sup> <a name="string_config" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.stringConfig"></a>

```python
string_config: str
```

- *Type:* str

String-based configuration data for the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#string_config ComputeZoneVmExtensionPolicy#string_config}

---

### ComputeZoneVmExtensionPolicyInstanceSelectors <a name="ComputeZoneVmExtensionPolicyInstanceSelectors" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors.Initializer"></a>

```python
from cdktn_provider_google import compute_zone_vm_extension_policy

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors(
  label_selector: ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors.property.labelSelector">label_selector</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | label_selector block. |

---

##### `label_selector`<sup>Optional</sup> <a name="label_selector" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors.property.labelSelector"></a>

```python
label_selector: ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

label_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#label_selector ComputeZoneVmExtensionPolicy#label_selector}

---

### ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector <a name="ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.Initializer"></a>

```python
from cdktn_provider_google import compute_zone_vm_extension_policy

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector(
  inclusion_labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels">inclusion_labels</a></code> | <code>typing.Mapping[str]</code> | A map of key-value pairs representing VM labels. |

---

##### `inclusion_labels`<sup>Optional</sup> <a name="inclusion_labels" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels"></a>

```python
inclusion_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of key-value pairs representing VM labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#inclusion_labels ComputeZoneVmExtensionPolicy#inclusion_labels}

---

### ComputeZoneVmExtensionPolicyTimeouts <a name="ComputeZoneVmExtensionPolicyTimeouts" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_google import compute_zone_vm_extension_policy

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#create ComputeZoneVmExtensionPolicy#create}. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#delete ComputeZoneVmExtensionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#update ComputeZoneVmExtensionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#create ComputeZoneVmExtensionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#delete ComputeZoneVmExtensionPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#update ComputeZoneVmExtensionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeZoneVmExtensionPolicyExtensionPoliciesList <a name="ComputeZoneVmExtensionPolicyExtensionPoliciesList" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer"></a>

```python
from cdktn_provider_google import compute_zone_vm_extension_policy

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeZoneVmExtensionPolicyExtensionPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>]

---


### ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference <a name="ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_zone_vm_extension_policy

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion">reset_pinned_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig">reset_string_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pinned_version` <a name="reset_pinned_version" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion"></a>

```python
def reset_pinned_version() -> None
```

##### `reset_string_config` <a name="reset_string_config" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig"></a>

```python
def reset_string_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput">extension_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput">pinned_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput">string_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName">extension_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion">pinned_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig">string_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extension_name_input`<sup>Optional</sup> <a name="extension_name_input" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput"></a>

```python
extension_name_input: str
```

- *Type:* str

---

##### `pinned_version_input`<sup>Optional</sup> <a name="pinned_version_input" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput"></a>

```python
pinned_version_input: str
```

- *Type:* str

---

##### `string_config_input`<sup>Optional</sup> <a name="string_config_input" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput"></a>

```python
string_config_input: str
```

- *Type:* str

---

##### `extension_name`<sup>Required</sup> <a name="extension_name" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName"></a>

```python
extension_name: str
```

- *Type:* str

---

##### `pinned_version`<sup>Required</sup> <a name="pinned_version" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion"></a>

```python
pinned_version: str
```

- *Type:* str

---

##### `string_config`<sup>Required</sup> <a name="string_config" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig"></a>

```python
string_config: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeZoneVmExtensionPolicyExtensionPolicies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>

---


### ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference <a name="ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_zone_vm_extension_policy

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels">reset_inclusion_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_inclusion_labels` <a name="reset_inclusion_labels" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels"></a>

```python
def reset_inclusion_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput">inclusion_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels">inclusion_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inclusion_labels_input`<sup>Optional</sup> <a name="inclusion_labels_input" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput"></a>

```python
inclusion_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `inclusion_labels`<sup>Required</sup> <a name="inclusion_labels" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels"></a>

```python
inclusion_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue"></a>

```python
internal_value: ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---


### ComputeZoneVmExtensionPolicyInstanceSelectorsList <a name="ComputeZoneVmExtensionPolicyInstanceSelectorsList" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer"></a>

```python
from cdktn_provider_google import compute_zone_vm_extension_policy

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeZoneVmExtensionPolicyInstanceSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>]

---


### ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference <a name="ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_zone_vm_extension_policy

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector">put_label_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector">reset_label_selector</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_label_selector` <a name="put_label_selector" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector"></a>

```python
def put_label_selector(
  inclusion_labels: typing.Mapping[str] = None
) -> None
```

###### `inclusion_labels`<sup>Optional</sup> <a name="inclusion_labels" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector.parameter.inclusionLabels"></a>

- *Type:* typing.Mapping[str]

A map of key-value pairs representing VM labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#inclusion_labels ComputeZoneVmExtensionPolicy#inclusion_labels}

---

##### `reset_label_selector` <a name="reset_label_selector" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector"></a>

```python
def reset_label_selector() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector">label_selector</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput">label_selector_input</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_selector`<sup>Required</sup> <a name="label_selector" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector"></a>

```python
label_selector: ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a>

---

##### `label_selector_input`<sup>Optional</sup> <a name="label_selector_input" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput"></a>

```python
label_selector_input: ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeZoneVmExtensionPolicyInstanceSelectors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>

---


### ComputeZoneVmExtensionPolicyTimeoutsOutputReference <a name="ComputeZoneVmExtensionPolicyTimeoutsOutputReference" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_zone_vm_extension_policy

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeZoneVmExtensionPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a>

---



