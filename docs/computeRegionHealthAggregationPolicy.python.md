# `computeRegionHealthAggregationPolicy` Submodule <a name="`computeRegionHealthAggregationPolicy` Submodule" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionHealthAggregationPolicy <a name="ComputeRegionHealthAggregationPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy google_compute_region_health_aggregation_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer"></a>

```python
from cdktn_provider_google import compute_region_health_aggregation_policy

computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy(
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
  region: str,
  deletion_policy: str = None,
  description: str = None,
  healthy_percent_threshold: typing.Union[int, float] = None,
  min_healthy_threshold: typing.Union[int, float] = None,
  policy_type: str = None,
  project: str = None,
  timeouts: ComputeRegionHealthAggregationPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.region">region</a></code> | <code>str</code> | URL of the region where the health aggregation policy resides. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.healthyPercentThreshold">healthy_percent_threshold</a></code> | <code>typing.Union[int, float]</code> | Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.minHealthyThreshold">min_healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.policyType">policy_type</a></code> | <code>str</code> | Specifies the type of the healthAggregationPolicy. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#project ComputeRegionHealthAggregationPolicy#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#name ComputeRegionHealthAggregationPolicy#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.region"></a>

- *Type:* str

URL of the region where the health aggregation policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#region ComputeRegionHealthAggregationPolicy#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#deletion_policy ComputeRegionHealthAggregationPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#description ComputeRegionHealthAggregationPolicy#description}

---

##### `healthy_percent_threshold`<sup>Optional</sup> <a name="healthy_percent_threshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.healthyPercentThreshold"></a>

- *Type:* typing.Union[int, float]

Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'.

Specifies the threshold (as a
percentage) of healthy endpoints required in order to consider the
aggregated health result HEALTHY. Defaults to '60'. Must be in
range [0, 100]. Not applicable if the 'policyType' field is
'DNB_PUBLIC_IP_POLICY'. Can be mutated. This field is optional,
and will be set to the default if unspecified. Note that both this
threshold and 'minHealthyThreshold' must be satisfied in order
for HEALTHY to be the aggregated result. "Endpoints" refers to network
endpoints within a Network Endpoint Group or instances within an Instance
Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#healthy_percent_threshold ComputeRegionHealthAggregationPolicy#healthy_percent_threshold}

---

##### `min_healthy_threshold`<sup>Optional</sup> <a name="min_healthy_threshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.minHealthyThreshold"></a>

- *Type:* typing.Union[int, float]

Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'.

Specifies the minimum number of
healthy endpoints required in order to consider the aggregated health
result HEALTHY. Defaults to '1'. Must be positive. Not
applicable if the 'policyType' field is
'DNB_PUBLIC_IP_POLICY'. Can be mutated. This field is optional,
and will be set to the default if unspecified. Note that both this
threshold and 'healthyPercentThreshold' must be satisfied in
order for HEALTHY to be the aggregated result. "Endpoints" refers to
network endpoints within a Network Endpoint Group or instances within an
Instance Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#min_healthy_threshold ComputeRegionHealthAggregationPolicy#min_healthy_threshold}

---

##### `policy_type`<sup>Optional</sup> <a name="policy_type" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.policyType"></a>

- *Type:* str

Specifies the type of the healthAggregationPolicy.

The only allowed value
for global resources is 'DNS_PUBLIC_IP_POLICY'. The only allowed
value for regional resources is 'BACKEND_SERVICE_POLICY'. Must
be specified when the healthAggregationPolicy is created, and cannot be
mutated. Default value: "BACKEND_SERVICE_POLICY" Possible values: ["DNS_PUBLIC_IP_POLICY", "BACKEND_SERVICE_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#policy_type ComputeRegionHealthAggregationPolicy#policy_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#project ComputeRegionHealthAggregationPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#timeouts ComputeRegionHealthAggregationPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetHealthyPercentThreshold">reset_healthy_percent_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetMinHealthyThreshold">reset_min_healthy_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetPolicyType">reset_policy_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#create ComputeRegionHealthAggregationPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#delete ComputeRegionHealthAggregationPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#update ComputeRegionHealthAggregationPolicy#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_healthy_percent_threshold` <a name="reset_healthy_percent_threshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetHealthyPercentThreshold"></a>

```python
def reset_healthy_percent_threshold() -> None
```

##### `reset_min_healthy_threshold` <a name="reset_min_healthy_threshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetMinHealthyThreshold"></a>

```python
def reset_min_healthy_threshold() -> None
```

##### `reset_policy_type` <a name="reset_policy_type" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetPolicyType"></a>

```python
def reset_policy_type() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComputeRegionHealthAggregationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isConstruct"></a>

```python
from cdktn_provider_google import compute_region_health_aggregation_policy

computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google import compute_region_health_aggregation_policy

computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google import compute_region_health_aggregation_policy

computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google import compute_region_health_aggregation_policy

computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComputeRegionHealthAggregationPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeRegionHealthAggregationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeRegionHealthAggregationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionHealthAggregationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.selfLinkWithId">self_link_with_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference">ComputeRegionHealthAggregationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThresholdInput">healthy_percent_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThresholdInput">min_healthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyTypeInput">policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThreshold">healthy_percent_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThreshold">min_healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `self_link_with_id`<sup>Required</sup> <a name="self_link_with_id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.selfLinkWithId"></a>

```python
self_link_with_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeouts"></a>

```python
timeouts: ComputeRegionHealthAggregationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference">ComputeRegionHealthAggregationPolicyTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `healthy_percent_threshold_input`<sup>Optional</sup> <a name="healthy_percent_threshold_input" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThresholdInput"></a>

```python
healthy_percent_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_healthy_threshold_input`<sup>Optional</sup> <a name="min_healthy_threshold_input" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThresholdInput"></a>

```python
min_healthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_type_input`<sup>Optional</sup> <a name="policy_type_input" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyTypeInput"></a>

```python
policy_type_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ComputeRegionHealthAggregationPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `healthy_percent_threshold`<sup>Required</sup> <a name="healthy_percent_threshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThreshold"></a>

```python
healthy_percent_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_healthy_threshold`<sup>Required</sup> <a name="min_healthy_threshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThreshold"></a>

```python
min_healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionHealthAggregationPolicyConfig <a name="ComputeRegionHealthAggregationPolicyConfig" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google import compute_region_health_aggregation_policy

computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  region: str,
  deletion_policy: str = None,
  description: str = None,
  healthy_percent_threshold: typing.Union[int, float] = None,
  min_healthy_threshold: typing.Union[int, float] = None,
  policy_type: str = None,
  project: str = None,
  timeouts: ComputeRegionHealthAggregationPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.region">region</a></code> | <code>str</code> | URL of the region where the health aggregation policy resides. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.healthyPercentThreshold">healthy_percent_threshold</a></code> | <code>typing.Union[int, float]</code> | Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.minHealthyThreshold">min_healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.policyType">policy_type</a></code> | <code>str</code> | Specifies the type of the healthAggregationPolicy. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#project ComputeRegionHealthAggregationPolicy#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#name ComputeRegionHealthAggregationPolicy#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

URL of the region where the health aggregation policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#region ComputeRegionHealthAggregationPolicy#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#deletion_policy ComputeRegionHealthAggregationPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#description ComputeRegionHealthAggregationPolicy#description}

---

##### `healthy_percent_threshold`<sup>Optional</sup> <a name="healthy_percent_threshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.healthyPercentThreshold"></a>

```python
healthy_percent_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'.

Specifies the threshold (as a
percentage) of healthy endpoints required in order to consider the
aggregated health result HEALTHY. Defaults to '60'. Must be in
range [0, 100]. Not applicable if the 'policyType' field is
'DNB_PUBLIC_IP_POLICY'. Can be mutated. This field is optional,
and will be set to the default if unspecified. Note that both this
threshold and 'minHealthyThreshold' must be satisfied in order
for HEALTHY to be the aggregated result. "Endpoints" refers to network
endpoints within a Network Endpoint Group or instances within an Instance
Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#healthy_percent_threshold ComputeRegionHealthAggregationPolicy#healthy_percent_threshold}

---

##### `min_healthy_threshold`<sup>Optional</sup> <a name="min_healthy_threshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.minHealthyThreshold"></a>

```python
min_healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'.

Specifies the minimum number of
healthy endpoints required in order to consider the aggregated health
result HEALTHY. Defaults to '1'. Must be positive. Not
applicable if the 'policyType' field is
'DNB_PUBLIC_IP_POLICY'. Can be mutated. This field is optional,
and will be set to the default if unspecified. Note that both this
threshold and 'healthyPercentThreshold' must be satisfied in
order for HEALTHY to be the aggregated result. "Endpoints" refers to
network endpoints within a Network Endpoint Group or instances within an
Instance Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#min_healthy_threshold ComputeRegionHealthAggregationPolicy#min_healthy_threshold}

---

##### `policy_type`<sup>Optional</sup> <a name="policy_type" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

Specifies the type of the healthAggregationPolicy.

The only allowed value
for global resources is 'DNS_PUBLIC_IP_POLICY'. The only allowed
value for regional resources is 'BACKEND_SERVICE_POLICY'. Must
be specified when the healthAggregationPolicy is created, and cannot be
mutated. Default value: "BACKEND_SERVICE_POLICY" Possible values: ["DNS_PUBLIC_IP_POLICY", "BACKEND_SERVICE_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#policy_type ComputeRegionHealthAggregationPolicy#policy_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#project ComputeRegionHealthAggregationPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.timeouts"></a>

```python
timeouts: ComputeRegionHealthAggregationPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#timeouts ComputeRegionHealthAggregationPolicy#timeouts}

---

### ComputeRegionHealthAggregationPolicyTimeouts <a name="ComputeRegionHealthAggregationPolicyTimeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_google import compute_region_health_aggregation_policy

computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#create ComputeRegionHealthAggregationPolicy#create}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#delete ComputeRegionHealthAggregationPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#update ComputeRegionHealthAggregationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#create ComputeRegionHealthAggregationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#delete ComputeRegionHealthAggregationPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_aggregation_policy#update ComputeRegionHealthAggregationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionHealthAggregationPolicyTimeoutsOutputReference <a name="ComputeRegionHealthAggregationPolicyTimeoutsOutputReference" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_region_health_aggregation_policy

computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeRegionHealthAggregationPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

---



