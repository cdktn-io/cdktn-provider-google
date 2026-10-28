# `networkServicesServiceLbPolicies` Submodule <a name="`networkServicesServiceLbPolicies` Submodule" id="@cdktn/provider-google.networkServicesServiceLbPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesServiceLbPolicies <a name="NetworkServicesServiceLbPolicies" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies google_network_services_service_lb_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_service_lb_policies.NetworkServicesServiceLbPolicies;

NetworkServicesServiceLbPolicies.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .autoCapacityDrain(NetworkServicesServiceLbPoliciesAutoCapacityDrain)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .failoverConfig(NetworkServicesServiceLbPoliciesFailoverConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .loadBalancingAlgorithm(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesServiceLbPoliciesTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the service lb policy. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.autoCapacityDrain">autoCapacityDrain</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | auto_capacity_drain block. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.failoverConfig">failoverConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a></code> | failover_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#id NetworkServicesServiceLbPolicies#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the ServiceLbPolicy resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.loadBalancingAlgorithm">loadBalancingAlgorithm</a></code> | <code>java.lang.String</code> | The type of load balancing algorithm to be used. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#project NetworkServicesServiceLbPolicies#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the service lb policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#location NetworkServicesServiceLbPolicies#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#name NetworkServicesServiceLbPolicies#name}

---

##### `autoCapacityDrain`<sup>Optional</sup> <a name="autoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.autoCapacityDrain"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

auto_capacity_drain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#auto_capacity_drain NetworkServicesServiceLbPolicies#auto_capacity_drain}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

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

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#description NetworkServicesServiceLbPolicies#description}

---

##### `failoverConfig`<sup>Optional</sup> <a name="failoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.failoverConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

failover_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#failover_config NetworkServicesServiceLbPolicies#failover_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#id NetworkServicesServiceLbPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the ServiceLbPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#labels NetworkServicesServiceLbPolicies#labels}

---

##### `loadBalancingAlgorithm`<sup>Optional</sup> <a name="loadBalancingAlgorithm" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.loadBalancingAlgorithm"></a>

- *Type:* java.lang.String

The type of load balancing algorithm to be used.

The default behavior is WATERFALL_BY_REGION. Possible values: ["SPRAY_TO_REGION", "SPRAY_TO_WORLD", "WATERFALL_BY_REGION", "WATERFALL_BY_ZONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#load_balancing_algorithm NetworkServicesServiceLbPolicies#load_balancing_algorithm}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.project"></a>

- *Type:* java.lang.String

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
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putAutoCapacityDrain">putAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putFailoverConfig">putFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetAutoCapacityDrain">resetAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetFailoverConfig">resetFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLoadBalancingAlgorithm">resetLoadBalancingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoCapacityDrain` <a name="putAutoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putAutoCapacityDrain"></a>

```java
public void putAutoCapacityDrain(NetworkServicesServiceLbPoliciesAutoCapacityDrain value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putAutoCapacityDrain.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---

##### `putFailoverConfig` <a name="putFailoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putFailoverConfig"></a>

```java
public void putFailoverConfig(NetworkServicesServiceLbPoliciesFailoverConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putFailoverConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putTimeouts"></a>

```java
public void putTimeouts(NetworkServicesServiceLbPoliciesTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

---

##### `resetAutoCapacityDrain` <a name="resetAutoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetAutoCapacityDrain"></a>

```java
public void resetAutoCapacityDrain()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFailoverConfig` <a name="resetFailoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetFailoverConfig"></a>

```java
public void resetFailoverConfig()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLoadBalancingAlgorithm` <a name="resetLoadBalancingAlgorithm" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLoadBalancingAlgorithm"></a>

```java
public void resetLoadBalancingAlgorithm()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesServiceLbPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isConstruct"></a>

```java
import io.cdktn.providers.google.network_services_service_lb_policies.NetworkServicesServiceLbPolicies;

NetworkServicesServiceLbPolicies.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformElement"></a>

```java
import io.cdktn.providers.google.network_services_service_lb_policies.NetworkServicesServiceLbPolicies;

NetworkServicesServiceLbPolicies.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformResource"></a>

```java
import io.cdktn.providers.google.network_services_service_lb_policies.NetworkServicesServiceLbPolicies;

NetworkServicesServiceLbPolicies.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.network_services_service_lb_policies.NetworkServicesServiceLbPolicies;

NetworkServicesServiceLbPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkServicesServiceLbPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkServicesServiceLbPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkServicesServiceLbPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkServicesServiceLbPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesServiceLbPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrain">autoCapacityDrain</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference">NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfig">failoverConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference">NetworkServicesServiceLbPoliciesFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference">NetworkServicesServiceLbPoliciesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrainInput">autoCapacityDrainInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfigInput">failoverConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithmInput">loadBalancingAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithm">loadBalancingAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoCapacityDrain`<sup>Required</sup> <a name="autoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrain"></a>

```java
public NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference getAutoCapacityDrain();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference">NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `failoverConfig`<sup>Required</sup> <a name="failoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfig"></a>

```java
public NetworkServicesServiceLbPoliciesFailoverConfigOutputReference getFailoverConfig();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference">NetworkServicesServiceLbPoliciesFailoverConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeouts"></a>

```java
public NetworkServicesServiceLbPoliciesTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference">NetworkServicesServiceLbPoliciesTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `autoCapacityDrainInput`<sup>Optional</sup> <a name="autoCapacityDrainInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrainInput"></a>

```java
public NetworkServicesServiceLbPoliciesAutoCapacityDrain getAutoCapacityDrainInput();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `failoverConfigInput`<sup>Optional</sup> <a name="failoverConfigInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfigInput"></a>

```java
public NetworkServicesServiceLbPoliciesFailoverConfig getFailoverConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loadBalancingAlgorithmInput`<sup>Optional</sup> <a name="loadBalancingAlgorithmInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithmInput"></a>

```java
public java.lang.String getLoadBalancingAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeoutsInput"></a>

```java
public IResolvable|NetworkServicesServiceLbPoliciesTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loadBalancingAlgorithm`<sup>Required</sup> <a name="loadBalancingAlgorithm" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithm"></a>

```java
public java.lang.String getLoadBalancingAlgorithm();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesServiceLbPoliciesAutoCapacityDrain <a name="NetworkServicesServiceLbPoliciesAutoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_service_lb_policies.NetworkServicesServiceLbPoliciesAutoCapacityDrain;

NetworkServicesServiceLbPoliciesAutoCapacityDrain.builder()
//  .enable(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain.property.enable">enable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Optional. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain.property.enable"></a>

```java
public java.lang.Boolean|IResolvable getEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Optional.

If set to 'True', an unhealthy MIG/NEG will be set as drained. - An MIG/NEG is considered unhealthy if less than 25% of the instances/endpoints in the MIG/NEG are healthy. - This option will never result in draining more than 50% of the configured IGs/NEGs for the Backend Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#enable NetworkServicesServiceLbPolicies#enable}

---

### NetworkServicesServiceLbPoliciesConfig <a name="NetworkServicesServiceLbPoliciesConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_service_lb_policies.NetworkServicesServiceLbPoliciesConfig;

NetworkServicesServiceLbPoliciesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .autoCapacityDrain(NetworkServicesServiceLbPoliciesAutoCapacityDrain)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .failoverConfig(NetworkServicesServiceLbPoliciesFailoverConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .loadBalancingAlgorithm(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesServiceLbPoliciesTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the service lb policy. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.autoCapacityDrain">autoCapacityDrain</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | auto_capacity_drain block. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.failoverConfig">failoverConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a></code> | failover_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#id NetworkServicesServiceLbPolicies#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the ServiceLbPolicy resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.loadBalancingAlgorithm">loadBalancingAlgorithm</a></code> | <code>java.lang.String</code> | The type of load balancing algorithm to be used. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#project NetworkServicesServiceLbPolicies#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the service lb policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#location NetworkServicesServiceLbPolicies#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#name NetworkServicesServiceLbPolicies#name}

---

##### `autoCapacityDrain`<sup>Optional</sup> <a name="autoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.autoCapacityDrain"></a>

```java
public NetworkServicesServiceLbPoliciesAutoCapacityDrain getAutoCapacityDrain();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

auto_capacity_drain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#auto_capacity_drain NetworkServicesServiceLbPolicies#auto_capacity_drain}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#deletion_policy NetworkServicesServiceLbPolicies#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#description NetworkServicesServiceLbPolicies#description}

---

##### `failoverConfig`<sup>Optional</sup> <a name="failoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.failoverConfig"></a>

```java
public NetworkServicesServiceLbPoliciesFailoverConfig getFailoverConfig();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

failover_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#failover_config NetworkServicesServiceLbPolicies#failover_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#id NetworkServicesServiceLbPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the ServiceLbPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#labels NetworkServicesServiceLbPolicies#labels}

---

##### `loadBalancingAlgorithm`<sup>Optional</sup> <a name="loadBalancingAlgorithm" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.loadBalancingAlgorithm"></a>

```java
public java.lang.String getLoadBalancingAlgorithm();
```

- *Type:* java.lang.String

The type of load balancing algorithm to be used.

The default behavior is WATERFALL_BY_REGION. Possible values: ["SPRAY_TO_REGION", "SPRAY_TO_WORLD", "WATERFALL_BY_REGION", "WATERFALL_BY_ZONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#load_balancing_algorithm NetworkServicesServiceLbPolicies#load_balancing_algorithm}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#project NetworkServicesServiceLbPolicies#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.timeouts"></a>

```java
public NetworkServicesServiceLbPoliciesTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#timeouts NetworkServicesServiceLbPolicies#timeouts}

---

### NetworkServicesServiceLbPoliciesFailoverConfig <a name="NetworkServicesServiceLbPoliciesFailoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_service_lb_policies.NetworkServicesServiceLbPoliciesFailoverConfig;

NetworkServicesServiceLbPoliciesFailoverConfig.builder()
    .failoverHealthThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig.property.failoverHealthThreshold">failoverHealthThreshold</a></code> | <code>java.lang.Number</code> | Optional. |

---

##### `failoverHealthThreshold`<sup>Required</sup> <a name="failoverHealthThreshold" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig.property.failoverHealthThreshold"></a>

```java
public java.lang.Number getFailoverHealthThreshold();
```

- *Type:* java.lang.Number

Optional.

The percentage threshold that a load balancer will begin to send traffic to failover backends. If the percentage of endpoints in a MIG/NEG is smaller than this value, traffic would be sent to failover backends if possible. This field should be set to a value between 1 and 99. The default value is 50 for Global external HTTP(S) load balancer (classic) and Proxyless service mesh, and 70 for others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#failover_health_threshold NetworkServicesServiceLbPolicies#failover_health_threshold}

---

### NetworkServicesServiceLbPoliciesTimeouts <a name="NetworkServicesServiceLbPoliciesTimeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_service_lb_policies.NetworkServicesServiceLbPoliciesTimeouts;

NetworkServicesServiceLbPoliciesTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#create NetworkServicesServiceLbPolicies#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#delete NetworkServicesServiceLbPolicies#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#update NetworkServicesServiceLbPolicies#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#create NetworkServicesServiceLbPolicies#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#delete NetworkServicesServiceLbPolicies#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#update NetworkServicesServiceLbPolicies#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference <a name="NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_service_lb_policies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference;

new NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resetEnable">resetEnable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resetEnable"></a>

```java
public void resetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enableInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enable"></a>

```java
public java.lang.Boolean|IResolvable getEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.internalValue"></a>

```java
public NetworkServicesServiceLbPoliciesAutoCapacityDrain getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---


### NetworkServicesServiceLbPoliciesFailoverConfigOutputReference <a name="NetworkServicesServiceLbPoliciesFailoverConfigOutputReference" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_service_lb_policies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference;

new NetworkServicesServiceLbPoliciesFailoverConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThresholdInput">failoverHealthThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThreshold">failoverHealthThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failoverHealthThresholdInput`<sup>Optional</sup> <a name="failoverHealthThresholdInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThresholdInput"></a>

```java
public java.lang.Number getFailoverHealthThresholdInput();
```

- *Type:* java.lang.Number

---

##### `failoverHealthThreshold`<sup>Required</sup> <a name="failoverHealthThreshold" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThreshold"></a>

```java
public java.lang.Number getFailoverHealthThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.internalValue"></a>

```java
public NetworkServicesServiceLbPoliciesFailoverConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

---


### NetworkServicesServiceLbPoliciesTimeoutsOutputReference <a name="NetworkServicesServiceLbPoliciesTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_service_lb_policies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference;

new NetworkServicesServiceLbPoliciesTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkServicesServiceLbPoliciesTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

---



