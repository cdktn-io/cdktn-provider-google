# `networkServicesServiceLbPolicies` Submodule <a name="`networkServicesServiceLbPolicies` Submodule" id="@cdktn/provider-google.networkServicesServiceLbPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesServiceLbPolicies <a name="NetworkServicesServiceLbPolicies" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies google_network_services_service_lb_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer"></a>

```python
from cdktn_provider_google import network_services_service_lb_policies

networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  auto_capacity_drain: NetworkServicesServiceLbPoliciesAutoCapacityDrain = None,
  deletion_policy: str = None,
  description: str = None,
  failover_config: NetworkServicesServiceLbPoliciesFailoverConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  load_balancing_algorithm: str = None,
  project: str = None,
  timeouts: NetworkServicesServiceLbPoliciesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the service lb policy. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.autoCapacityDrain">auto_capacity_drain</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | auto_capacity_drain block. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.failoverConfig">failover_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a></code> | failover_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#id NetworkServicesServiceLbPolicies#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the ServiceLbPolicy resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.loadBalancingAlgorithm">load_balancing_algorithm</a></code> | <code>str</code> | The type of load balancing algorithm to be used. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#project NetworkServicesServiceLbPolicies#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.location"></a>

- *Type:* str

The location of the service lb policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#location NetworkServicesServiceLbPolicies#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.name"></a>

- *Type:* str

Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#name NetworkServicesServiceLbPolicies#name}

---

##### `auto_capacity_drain`<sup>Optional</sup> <a name="auto_capacity_drain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.autoCapacityDrain"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

auto_capacity_drain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#auto_capacity_drain NetworkServicesServiceLbPolicies#auto_capacity_drain}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#deletion_policy NetworkServicesServiceLbPolicies#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#description NetworkServicesServiceLbPolicies#description}

---

##### `failover_config`<sup>Optional</sup> <a name="failover_config" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.failoverConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

failover_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#failover_config NetworkServicesServiceLbPolicies#failover_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#id NetworkServicesServiceLbPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the ServiceLbPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#labels NetworkServicesServiceLbPolicies#labels}

---

##### `load_balancing_algorithm`<sup>Optional</sup> <a name="load_balancing_algorithm" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.loadBalancingAlgorithm"></a>

- *Type:* str

The type of load balancing algorithm to be used.

The default behavior is WATERFALL_BY_REGION. Possible values: ["SPRAY_TO_REGION", "SPRAY_TO_WORLD", "WATERFALL_BY_REGION", "WATERFALL_BY_ZONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#load_balancing_algorithm NetworkServicesServiceLbPolicies#load_balancing_algorithm}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#project NetworkServicesServiceLbPolicies#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#timeouts NetworkServicesServiceLbPolicies#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putAutoCapacityDrain">put_auto_capacity_drain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putFailoverConfig">put_failover_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetAutoCapacityDrain">reset_auto_capacity_drain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetFailoverConfig">reset_failover_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLoadBalancingAlgorithm">reset_load_balancing_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_capacity_drain` <a name="put_auto_capacity_drain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putAutoCapacityDrain"></a>

```python
def put_auto_capacity_drain(
  enable: bool | IResolvable = None
) -> None
```

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putAutoCapacityDrain.parameter.enable"></a>

- *Type:* bool | cdktn.IResolvable

Optional.

If set to 'True', an unhealthy MIG/NEG will be set as drained. - An MIG/NEG is considered unhealthy if less than 25% of the instances/endpoints in the MIG/NEG are healthy. - This option will never result in draining more than 50% of the configured IGs/NEGs for the Backend Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#enable NetworkServicesServiceLbPolicies#enable}

---

##### `put_failover_config` <a name="put_failover_config" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putFailoverConfig"></a>

```python
def put_failover_config(
  failover_health_threshold: typing.Union[int, float]
) -> None
```

###### `failover_health_threshold`<sup>Required</sup> <a name="failover_health_threshold" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putFailoverConfig.parameter.failoverHealthThreshold"></a>

- *Type:* typing.Union[int, float]

Optional.

The percentage threshold that a load balancer will begin to send traffic to failover backends. If the percentage of endpoints in a MIG/NEG is smaller than this value, traffic would be sent to failover backends if possible. This field should be set to a value between 1 and 99. The default value is 50 for Global external HTTP(S) load balancer (classic) and Proxyless service mesh, and 70 for others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#failover_health_threshold NetworkServicesServiceLbPolicies#failover_health_threshold}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#create NetworkServicesServiceLbPolicies#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#delete NetworkServicesServiceLbPolicies#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#update NetworkServicesServiceLbPolicies#update}.

---

##### `reset_auto_capacity_drain` <a name="reset_auto_capacity_drain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetAutoCapacityDrain"></a>

```python
def reset_auto_capacity_drain() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_failover_config` <a name="reset_failover_config" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetFailoverConfig"></a>

```python
def reset_failover_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_load_balancing_algorithm` <a name="reset_load_balancing_algorithm" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLoadBalancingAlgorithm"></a>

```python
def reset_load_balancing_algorithm() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkServicesServiceLbPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isConstruct"></a>

```python
from cdktn_provider_google import network_services_service_lb_policies

networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformElement"></a>

```python
from cdktn_provider_google import network_services_service_lb_policies

networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformResource"></a>

```python
from cdktn_provider_google import network_services_service_lb_policies

networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport"></a>

```python
from cdktn_provider_google import network_services_service_lb_policies

networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkServicesServiceLbPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkServicesServiceLbPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkServicesServiceLbPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesServiceLbPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrain">auto_capacity_drain</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference">NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfig">failover_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference">NetworkServicesServiceLbPoliciesFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference">NetworkServicesServiceLbPoliciesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrainInput">auto_capacity_drain_input</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfigInput">failover_config_input</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithmInput">load_balancing_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithm">load_balancing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_capacity_drain`<sup>Required</sup> <a name="auto_capacity_drain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrain"></a>

```python
auto_capacity_drain: NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference">NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `failover_config`<sup>Required</sup> <a name="failover_config" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfig"></a>

```python
failover_config: NetworkServicesServiceLbPoliciesFailoverConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference">NetworkServicesServiceLbPoliciesFailoverConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeouts"></a>

```python
timeouts: NetworkServicesServiceLbPoliciesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference">NetworkServicesServiceLbPoliciesTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `auto_capacity_drain_input`<sup>Optional</sup> <a name="auto_capacity_drain_input" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrainInput"></a>

```python
auto_capacity_drain_input: NetworkServicesServiceLbPoliciesAutoCapacityDrain
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `failover_config_input`<sup>Optional</sup> <a name="failover_config_input" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfigInput"></a>

```python
failover_config_input: NetworkServicesServiceLbPoliciesFailoverConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_balancing_algorithm_input`<sup>Optional</sup> <a name="load_balancing_algorithm_input" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithmInput"></a>

```python
load_balancing_algorithm_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkServicesServiceLbPoliciesTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_balancing_algorithm`<sup>Required</sup> <a name="load_balancing_algorithm" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithm"></a>

```python
load_balancing_algorithm: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesServiceLbPoliciesAutoCapacityDrain <a name="NetworkServicesServiceLbPoliciesAutoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain.Initializer"></a>

```python
from cdktn_provider_google import network_services_service_lb_policies

networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain(
  enable: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | Optional. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Optional.

If set to 'True', an unhealthy MIG/NEG will be set as drained. - An MIG/NEG is considered unhealthy if less than 25% of the instances/endpoints in the MIG/NEG are healthy. - This option will never result in draining more than 50% of the configured IGs/NEGs for the Backend Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#enable NetworkServicesServiceLbPolicies#enable}

---

### NetworkServicesServiceLbPoliciesConfig <a name="NetworkServicesServiceLbPoliciesConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_service_lb_policies

networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  auto_capacity_drain: NetworkServicesServiceLbPoliciesAutoCapacityDrain = None,
  deletion_policy: str = None,
  description: str = None,
  failover_config: NetworkServicesServiceLbPoliciesFailoverConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  load_balancing_algorithm: str = None,
  project: str = None,
  timeouts: NetworkServicesServiceLbPoliciesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.location">location</a></code> | <code>str</code> | The location of the service lb policy. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.name">name</a></code> | <code>str</code> | Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.autoCapacityDrain">auto_capacity_drain</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | auto_capacity_drain block. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.failoverConfig">failover_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a></code> | failover_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#id NetworkServicesServiceLbPolicies#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the ServiceLbPolicy resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.loadBalancingAlgorithm">load_balancing_algorithm</a></code> | <code>str</code> | The type of load balancing algorithm to be used. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#project NetworkServicesServiceLbPolicies#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the service lb policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#location NetworkServicesServiceLbPolicies#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#name NetworkServicesServiceLbPolicies#name}

---

##### `auto_capacity_drain`<sup>Optional</sup> <a name="auto_capacity_drain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.autoCapacityDrain"></a>

```python
auto_capacity_drain: NetworkServicesServiceLbPoliciesAutoCapacityDrain
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

auto_capacity_drain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#auto_capacity_drain NetworkServicesServiceLbPolicies#auto_capacity_drain}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#deletion_policy NetworkServicesServiceLbPolicies#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#description NetworkServicesServiceLbPolicies#description}

---

##### `failover_config`<sup>Optional</sup> <a name="failover_config" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.failoverConfig"></a>

```python
failover_config: NetworkServicesServiceLbPoliciesFailoverConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

failover_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#failover_config NetworkServicesServiceLbPolicies#failover_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#id NetworkServicesServiceLbPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the ServiceLbPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#labels NetworkServicesServiceLbPolicies#labels}

---

##### `load_balancing_algorithm`<sup>Optional</sup> <a name="load_balancing_algorithm" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.loadBalancingAlgorithm"></a>

```python
load_balancing_algorithm: str
```

- *Type:* str

The type of load balancing algorithm to be used.

The default behavior is WATERFALL_BY_REGION. Possible values: ["SPRAY_TO_REGION", "SPRAY_TO_WORLD", "WATERFALL_BY_REGION", "WATERFALL_BY_ZONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#load_balancing_algorithm NetworkServicesServiceLbPolicies#load_balancing_algorithm}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#project NetworkServicesServiceLbPolicies#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.timeouts"></a>

```python
timeouts: NetworkServicesServiceLbPoliciesTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#timeouts NetworkServicesServiceLbPolicies#timeouts}

---

### NetworkServicesServiceLbPoliciesFailoverConfig <a name="NetworkServicesServiceLbPoliciesFailoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_service_lb_policies

networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig(
  failover_health_threshold: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig.property.failoverHealthThreshold">failover_health_threshold</a></code> | <code>typing.Union[int, float]</code> | Optional. |

---

##### `failover_health_threshold`<sup>Required</sup> <a name="failover_health_threshold" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig.property.failoverHealthThreshold"></a>

```python
failover_health_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

The percentage threshold that a load balancer will begin to send traffic to failover backends. If the percentage of endpoints in a MIG/NEG is smaller than this value, traffic would be sent to failover backends if possible. This field should be set to a value between 1 and 99. The default value is 50 for Global external HTTP(S) load balancer (classic) and Proxyless service mesh, and 70 for others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#failover_health_threshold NetworkServicesServiceLbPolicies#failover_health_threshold}

---

### NetworkServicesServiceLbPoliciesTimeouts <a name="NetworkServicesServiceLbPoliciesTimeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.Initializer"></a>

```python
from cdktn_provider_google import network_services_service_lb_policies

networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#create NetworkServicesServiceLbPolicies#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#delete NetworkServicesServiceLbPolicies#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#update NetworkServicesServiceLbPolicies#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#create NetworkServicesServiceLbPolicies#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#delete NetworkServicesServiceLbPolicies#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#update NetworkServicesServiceLbPolicies#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference <a name="NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_service_lb_policies

networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resetEnable">reset_enable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable` <a name="reset_enable" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enableInput">enable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enableInput"></a>

```python
enable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesServiceLbPoliciesAutoCapacityDrain
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---


### NetworkServicesServiceLbPoliciesFailoverConfigOutputReference <a name="NetworkServicesServiceLbPoliciesFailoverConfigOutputReference" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_service_lb_policies

networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThresholdInput">failover_health_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThreshold">failover_health_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failover_health_threshold_input`<sup>Optional</sup> <a name="failover_health_threshold_input" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThresholdInput"></a>

```python
failover_health_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failover_health_threshold`<sup>Required</sup> <a name="failover_health_threshold" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThreshold"></a>

```python
failover_health_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesServiceLbPoliciesFailoverConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

---


### NetworkServicesServiceLbPoliciesTimeoutsOutputReference <a name="NetworkServicesServiceLbPoliciesTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_service_lb_policies

networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkServicesServiceLbPoliciesTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

---



