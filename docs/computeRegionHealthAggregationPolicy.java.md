# `computeRegionHealthAggregationPolicy` Submodule <a name="`computeRegionHealthAggregationPolicy` Submodule" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionHealthAggregationPolicy <a name="ComputeRegionHealthAggregationPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy google_compute_region_health_aggregation_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_health_aggregation_policy.ComputeRegionHealthAggregationPolicy;

ComputeRegionHealthAggregationPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .region(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .healthyPercentThreshold(java.lang.Number)
//  .minHealthyThreshold(java.lang.Number)
//  .policyType(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeRegionHealthAggregationPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | URL of the region where the health aggregation policy resides. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.healthyPercentThreshold">healthyPercentThreshold</a></code> | <code>java.lang.Number</code> | Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.minHealthyThreshold">minHealthyThreshold</a></code> | <code>java.lang.Number</code> | Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.policyType">policyType</a></code> | <code>java.lang.String</code> | Specifies the type of the healthAggregationPolicy. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#project ComputeRegionHealthAggregationPolicy#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#name ComputeRegionHealthAggregationPolicy#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.region"></a>

- *Type:* java.lang.String

URL of the region where the health aggregation policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#region ComputeRegionHealthAggregationPolicy#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#deletion_policy ComputeRegionHealthAggregationPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#description ComputeRegionHealthAggregationPolicy#description}

---

##### `healthyPercentThreshold`<sup>Optional</sup> <a name="healthyPercentThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.healthyPercentThreshold"></a>

- *Type:* java.lang.Number

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#healthy_percent_threshold ComputeRegionHealthAggregationPolicy#healthy_percent_threshold}

---

##### `minHealthyThreshold`<sup>Optional</sup> <a name="minHealthyThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.minHealthyThreshold"></a>

- *Type:* java.lang.Number

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#min_healthy_threshold ComputeRegionHealthAggregationPolicy#min_healthy_threshold}

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.policyType"></a>

- *Type:* java.lang.String

Specifies the type of the healthAggregationPolicy.

The only allowed value
for global resources is 'DNS_PUBLIC_IP_POLICY'. The only allowed
value for regional resources is 'BACKEND_SERVICE_POLICY'. Must
be specified when the healthAggregationPolicy is created, and cannot be
mutated. Default value: "BACKEND_SERVICE_POLICY" Possible values: ["DNS_PUBLIC_IP_POLICY", "BACKEND_SERVICE_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#policy_type ComputeRegionHealthAggregationPolicy#policy_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#project ComputeRegionHealthAggregationPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#timeouts ComputeRegionHealthAggregationPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetHealthyPercentThreshold">resetHealthyPercentThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetMinHealthyThreshold">resetMinHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetPolicyType">resetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.putTimeouts"></a>

```java
public void putTimeouts(ComputeRegionHealthAggregationPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHealthyPercentThreshold` <a name="resetHealthyPercentThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetHealthyPercentThreshold"></a>

```java
public void resetHealthyPercentThreshold()
```

##### `resetMinHealthyThreshold` <a name="resetMinHealthyThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetMinHealthyThreshold"></a>

```java
public void resetMinHealthyThreshold()
```

##### `resetPolicyType` <a name="resetPolicyType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetPolicyType"></a>

```java
public void resetPolicyType()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRegionHealthAggregationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_region_health_aggregation_policy.ComputeRegionHealthAggregationPolicy;

ComputeRegionHealthAggregationPolicy.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_region_health_aggregation_policy.ComputeRegionHealthAggregationPolicy;

ComputeRegionHealthAggregationPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_region_health_aggregation_policy.ComputeRegionHealthAggregationPolicy;

ComputeRegionHealthAggregationPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_region_health_aggregation_policy.ComputeRegionHealthAggregationPolicy;

ComputeRegionHealthAggregationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeRegionHealthAggregationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeRegionHealthAggregationPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeRegionHealthAggregationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeRegionHealthAggregationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionHealthAggregationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.selfLinkWithId">selfLinkWithId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference">ComputeRegionHealthAggregationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThresholdInput">healthyPercentThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThresholdInput">minHealthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyTypeInput">policyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThreshold">healthyPercentThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThreshold">minHealthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `selfLinkWithId`<sup>Required</sup> <a name="selfLinkWithId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.selfLinkWithId"></a>

```java
public java.lang.String getSelfLinkWithId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeouts"></a>

```java
public ComputeRegionHealthAggregationPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference">ComputeRegionHealthAggregationPolicyTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `healthyPercentThresholdInput`<sup>Optional</sup> <a name="healthyPercentThresholdInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThresholdInput"></a>

```java
public java.lang.Number getHealthyPercentThresholdInput();
```

- *Type:* java.lang.Number

---

##### `minHealthyThresholdInput`<sup>Optional</sup> <a name="minHealthyThresholdInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThresholdInput"></a>

```java
public java.lang.Number getMinHealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyTypeInput"></a>

```java
public java.lang.String getPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeoutsInput"></a>

```java
public IResolvable|ComputeRegionHealthAggregationPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `healthyPercentThreshold`<sup>Required</sup> <a name="healthyPercentThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThreshold"></a>

```java
public java.lang.Number getHealthyPercentThreshold();
```

- *Type:* java.lang.Number

---

##### `minHealthyThreshold`<sup>Required</sup> <a name="minHealthyThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThreshold"></a>

```java
public java.lang.Number getMinHealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionHealthAggregationPolicyConfig <a name="ComputeRegionHealthAggregationPolicyConfig" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_health_aggregation_policy.ComputeRegionHealthAggregationPolicyConfig;

ComputeRegionHealthAggregationPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .region(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .healthyPercentThreshold(java.lang.Number)
//  .minHealthyThreshold(java.lang.Number)
//  .policyType(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeRegionHealthAggregationPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.region">region</a></code> | <code>java.lang.String</code> | URL of the region where the health aggregation policy resides. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.healthyPercentThreshold">healthyPercentThreshold</a></code> | <code>java.lang.Number</code> | Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.minHealthyThreshold">minHealthyThreshold</a></code> | <code>java.lang.Number</code> | Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.policyType">policyType</a></code> | <code>java.lang.String</code> | Specifies the type of the healthAggregationPolicy. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#project ComputeRegionHealthAggregationPolicy#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#name ComputeRegionHealthAggregationPolicy#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

URL of the region where the health aggregation policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#region ComputeRegionHealthAggregationPolicy#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#deletion_policy ComputeRegionHealthAggregationPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#description ComputeRegionHealthAggregationPolicy#description}

---

##### `healthyPercentThreshold`<sup>Optional</sup> <a name="healthyPercentThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.healthyPercentThreshold"></a>

```java
public java.lang.Number getHealthyPercentThreshold();
```

- *Type:* java.lang.Number

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#healthy_percent_threshold ComputeRegionHealthAggregationPolicy#healthy_percent_threshold}

---

##### `minHealthyThreshold`<sup>Optional</sup> <a name="minHealthyThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.minHealthyThreshold"></a>

```java
public java.lang.Number getMinHealthyThreshold();
```

- *Type:* java.lang.Number

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#min_healthy_threshold ComputeRegionHealthAggregationPolicy#min_healthy_threshold}

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

Specifies the type of the healthAggregationPolicy.

The only allowed value
for global resources is 'DNS_PUBLIC_IP_POLICY'. The only allowed
value for regional resources is 'BACKEND_SERVICE_POLICY'. Must
be specified when the healthAggregationPolicy is created, and cannot be
mutated. Default value: "BACKEND_SERVICE_POLICY" Possible values: ["DNS_PUBLIC_IP_POLICY", "BACKEND_SERVICE_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#policy_type ComputeRegionHealthAggregationPolicy#policy_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#project ComputeRegionHealthAggregationPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.timeouts"></a>

```java
public ComputeRegionHealthAggregationPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#timeouts ComputeRegionHealthAggregationPolicy#timeouts}

---

### ComputeRegionHealthAggregationPolicyTimeouts <a name="ComputeRegionHealthAggregationPolicyTimeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_health_aggregation_policy.ComputeRegionHealthAggregationPolicyTimeouts;

ComputeRegionHealthAggregationPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#create ComputeRegionHealthAggregationPolicy#create}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#delete ComputeRegionHealthAggregationPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#update ComputeRegionHealthAggregationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#create ComputeRegionHealthAggregationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#delete ComputeRegionHealthAggregationPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#update ComputeRegionHealthAggregationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionHealthAggregationPolicyTimeoutsOutputReference <a name="ComputeRegionHealthAggregationPolicyTimeoutsOutputReference" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_health_aggregation_policy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference;

new ComputeRegionHealthAggregationPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeRegionHealthAggregationPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

---



