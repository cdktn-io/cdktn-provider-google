# `networkServicesMulticastDomainActivation` Submodule <a name="`networkServicesMulticastDomainActivation` Submodule" id="@cdktn/provider-google.networkServicesMulticastDomainActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastDomainActivation <a name="NetworkServicesMulticastDomainActivation" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation google_network_services_multicast_domain_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_domain_activation.NetworkServicesMulticastDomainActivation;

NetworkServicesMulticastDomainActivation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .multicastDomain(java.lang.String)
    .multicastDomainActivationId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .disablePlacementPolicy(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesMulticastDomainActivationTimeouts)
//  .trafficSpec(NetworkServicesMulticastDomainActivationTrafficSpec)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.multicastDomain">multicastDomain</a></code> | <code>java.lang.String</code> | The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.multicastDomainActivationId">multicastDomainActivationId</a></code> | <code>java.lang.String</code> | A unique name for the multicast domain activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional text description of the multicast domain activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.disablePlacementPolicy">disablePlacementPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Option to allow disabling placement policy for multicast infrastructure. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#id NetworkServicesMulticastDomainActivation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#project NetworkServicesMulticastDomainActivation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.trafficSpec">trafficSpec</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a></code> | traffic_spec block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#location NetworkServicesMulticastDomainActivation#location}

---

##### `multicastDomain`<sup>Required</sup> <a name="multicastDomain" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.multicastDomain"></a>

- *Type:* java.lang.String

The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#multicast_domain NetworkServicesMulticastDomainActivation#multicast_domain}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicastDomainActivationId`<sup>Required</sup> <a name="multicastDomainActivationId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.multicastDomainActivationId"></a>

- *Type:* java.lang.String

A unique name for the multicast domain activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#multicast_domain_activation_id NetworkServicesMulticastDomainActivation#multicast_domain_activation_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#deletion_policy NetworkServicesMulticastDomainActivation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional text description of the multicast domain activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#description NetworkServicesMulticastDomainActivation#description}

---

##### `disablePlacementPolicy`<sup>Optional</sup> <a name="disablePlacementPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.disablePlacementPolicy"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Option to allow disabling placement policy for multicast infrastructure.

Only applicable if the activation is for a domain associating with a
multicast domain group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#disable_placement_policy NetworkServicesMulticastDomainActivation#disable_placement_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#id NetworkServicesMulticastDomainActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#labels NetworkServicesMulticastDomainActivation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#project NetworkServicesMulticastDomainActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#timeouts NetworkServicesMulticastDomainActivation#timeouts}

---

##### `trafficSpec`<sup>Optional</sup> <a name="trafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.trafficSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a>

traffic_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#traffic_spec NetworkServicesMulticastDomainActivation#traffic_spec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTrafficSpec">putTrafficSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDisablePlacementPolicy">resetDisablePlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetTrafficSpec">resetTrafficSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTimeouts"></a>

```java
public void putTimeouts(NetworkServicesMulticastDomainActivationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a>

---

##### `putTrafficSpec` <a name="putTrafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTrafficSpec"></a>

```java
public void putTrafficSpec(NetworkServicesMulticastDomainActivationTrafficSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTrafficSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisablePlacementPolicy` <a name="resetDisablePlacementPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDisablePlacementPolicy"></a>

```java
public void resetDisablePlacementPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrafficSpec` <a name="resetTrafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetTrafficSpec"></a>

```java
public void resetTrafficSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastDomainActivation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isConstruct"></a>

```java
import io.cdktn.providers.google.network_services_multicast_domain_activation.NetworkServicesMulticastDomainActivation;

NetworkServicesMulticastDomainActivation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformElement"></a>

```java
import io.cdktn.providers.google.network_services_multicast_domain_activation.NetworkServicesMulticastDomainActivation;

NetworkServicesMulticastDomainActivation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformResource"></a>

```java
import io.cdktn.providers.google.network_services_multicast_domain_activation.NetworkServicesMulticastDomainActivation;

NetworkServicesMulticastDomainActivation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.network_services_multicast_domain_activation.NetworkServicesMulticastDomainActivation;

NetworkServicesMulticastDomainActivation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkServicesMulticastDomainActivation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkServicesMulticastDomainActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkServicesMulticastDomainActivation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkServicesMulticastDomainActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastDomainActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.adminNetwork">adminNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.state">state</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList">NetworkServicesMulticastDomainActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference">NetworkServicesMulticastDomainActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.trafficSpec">trafficSpec</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference">NetworkServicesMulticastDomainActivationTrafficSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.uniqueId">uniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.disablePlacementPolicyInput">disablePlacementPolicyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainActivationIdInput">multicastDomainActivationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainInput">multicastDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.trafficSpecInput">trafficSpecInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.disablePlacementPolicy">disablePlacementPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomain">multicastDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainActivationId">multicastDomainActivationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `adminNetwork`<sup>Required</sup> <a name="adminNetwork" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.adminNetwork"></a>

```java
public java.lang.String getAdminNetwork();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.state"></a>

```java
public NetworkServicesMulticastDomainActivationStateList getState();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList">NetworkServicesMulticastDomainActivationStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.timeouts"></a>

```java
public NetworkServicesMulticastDomainActivationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference">NetworkServicesMulticastDomainActivationTimeoutsOutputReference</a>

---

##### `trafficSpec`<sup>Required</sup> <a name="trafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.trafficSpec"></a>

```java
public NetworkServicesMulticastDomainActivationTrafficSpecOutputReference getTrafficSpec();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference">NetworkServicesMulticastDomainActivationTrafficSpecOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.uniqueId"></a>

```java
public java.lang.String getUniqueId();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disablePlacementPolicyInput`<sup>Optional</sup> <a name="disablePlacementPolicyInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.disablePlacementPolicyInput"></a>

```java
public java.lang.Boolean|IResolvable getDisablePlacementPolicyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `multicastDomainActivationIdInput`<sup>Optional</sup> <a name="multicastDomainActivationIdInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainActivationIdInput"></a>

```java
public java.lang.String getMulticastDomainActivationIdInput();
```

- *Type:* java.lang.String

---

##### `multicastDomainInput`<sup>Optional</sup> <a name="multicastDomainInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainInput"></a>

```java
public java.lang.String getMulticastDomainInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.timeoutsInput"></a>

```java
public IResolvable|NetworkServicesMulticastDomainActivationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a>

---

##### `trafficSpecInput`<sup>Optional</sup> <a name="trafficSpecInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.trafficSpecInput"></a>

```java
public NetworkServicesMulticastDomainActivationTrafficSpec getTrafficSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disablePlacementPolicy`<sup>Required</sup> <a name="disablePlacementPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.disablePlacementPolicy"></a>

```java
public java.lang.Boolean|IResolvable getDisablePlacementPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `multicastDomain`<sup>Required</sup> <a name="multicastDomain" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomain"></a>

```java
public java.lang.String getMulticastDomain();
```

- *Type:* java.lang.String

---

##### `multicastDomainActivationId`<sup>Required</sup> <a name="multicastDomainActivationId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainActivationId"></a>

```java
public java.lang.String getMulticastDomainActivationId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastDomainActivationConfig <a name="NetworkServicesMulticastDomainActivationConfig" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_domain_activation.NetworkServicesMulticastDomainActivationConfig;

NetworkServicesMulticastDomainActivationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .multicastDomain(java.lang.String)
    .multicastDomainActivationId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .disablePlacementPolicy(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesMulticastDomainActivationTimeouts)
//  .trafficSpec(NetworkServicesMulticastDomainActivationTrafficSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.multicastDomain">multicastDomain</a></code> | <code>java.lang.String</code> | The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.multicastDomainActivationId">multicastDomainActivationId</a></code> | <code>java.lang.String</code> | A unique name for the multicast domain activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional text description of the multicast domain activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.disablePlacementPolicy">disablePlacementPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Option to allow disabling placement policy for multicast infrastructure. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#id NetworkServicesMulticastDomainActivation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#project NetworkServicesMulticastDomainActivation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.trafficSpec">trafficSpec</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a></code> | traffic_spec block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#location NetworkServicesMulticastDomainActivation#location}

---

##### `multicastDomain`<sup>Required</sup> <a name="multicastDomain" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.multicastDomain"></a>

```java
public java.lang.String getMulticastDomain();
```

- *Type:* java.lang.String

The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#multicast_domain NetworkServicesMulticastDomainActivation#multicast_domain}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicastDomainActivationId`<sup>Required</sup> <a name="multicastDomainActivationId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.multicastDomainActivationId"></a>

```java
public java.lang.String getMulticastDomainActivationId();
```

- *Type:* java.lang.String

A unique name for the multicast domain activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#multicast_domain_activation_id NetworkServicesMulticastDomainActivation#multicast_domain_activation_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#deletion_policy NetworkServicesMulticastDomainActivation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional text description of the multicast domain activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#description NetworkServicesMulticastDomainActivation#description}

---

##### `disablePlacementPolicy`<sup>Optional</sup> <a name="disablePlacementPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.disablePlacementPolicy"></a>

```java
public java.lang.Boolean|IResolvable getDisablePlacementPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Option to allow disabling placement policy for multicast infrastructure.

Only applicable if the activation is for a domain associating with a
multicast domain group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#disable_placement_policy NetworkServicesMulticastDomainActivation#disable_placement_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#id NetworkServicesMulticastDomainActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#labels NetworkServicesMulticastDomainActivation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#project NetworkServicesMulticastDomainActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.timeouts"></a>

```java
public NetworkServicesMulticastDomainActivationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#timeouts NetworkServicesMulticastDomainActivation#timeouts}

---

##### `trafficSpec`<sup>Optional</sup> <a name="trafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.trafficSpec"></a>

```java
public NetworkServicesMulticastDomainActivationTrafficSpec getTrafficSpec();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a>

traffic_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#traffic_spec NetworkServicesMulticastDomainActivation#traffic_spec}

---

### NetworkServicesMulticastDomainActivationState <a name="NetworkServicesMulticastDomainActivationState" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationState.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_domain_activation.NetworkServicesMulticastDomainActivationState;

NetworkServicesMulticastDomainActivationState.builder()
    .build();
```


### NetworkServicesMulticastDomainActivationTimeouts <a name="NetworkServicesMulticastDomainActivationTimeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_domain_activation.NetworkServicesMulticastDomainActivationTimeouts;

NetworkServicesMulticastDomainActivationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#create NetworkServicesMulticastDomainActivation#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#delete NetworkServicesMulticastDomainActivation#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#update NetworkServicesMulticastDomainActivation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#create NetworkServicesMulticastDomainActivation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#delete NetworkServicesMulticastDomainActivation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#update NetworkServicesMulticastDomainActivation#update}.

---

### NetworkServicesMulticastDomainActivationTrafficSpec <a name="NetworkServicesMulticastDomainActivationTrafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_domain_activation.NetworkServicesMulticastDomainActivationTrafficSpec;

NetworkServicesMulticastDomainActivationTrafficSpec.builder()
//  .aggrEgressPps(java.lang.String)
//  .aggrIngressPps(java.lang.String)
//  .avgPacketSize(java.lang.Number)
//  .maxPerGroupIngressPps(java.lang.String)
//  .maxPerGroupSubscribers(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.aggrEgressPps">aggrEgressPps</a></code> | <code>java.lang.String</code> | Aggregated egress Packet-Per-Second for all multicast groups in the domain in this zone. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.aggrIngressPps">aggrIngressPps</a></code> | <code>java.lang.String</code> | Aggregated ingress Packet-Per-Second for all multicast groups in the domain in this zone. Default to (aggregated_egress_pps / max_per_group_subscribers) * 2. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.avgPacketSize">avgPacketSize</a></code> | <code>java.lang.Number</code> | Average packet size (Default to 512 bytes). |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupIngressPps">maxPerGroupIngressPps</a></code> | <code>java.lang.String</code> | Maximum ingress Packet-Per-Second for a single multicast group in this zone. Default to aggregated_ingress_pps / 2. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupSubscribers">maxPerGroupSubscribers</a></code> | <code>java.lang.String</code> | Maximum number of subscribers for a single multicast group in this zone. Default to max(50, aggregated_egress_pps / aggregated_ingress_pps). |

---

##### `aggrEgressPps`<sup>Optional</sup> <a name="aggrEgressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.aggrEgressPps"></a>

```java
public java.lang.String getAggrEgressPps();
```

- *Type:* java.lang.String

Aggregated egress Packet-Per-Second for all multicast groups in the domain in this zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#aggr_egress_pps NetworkServicesMulticastDomainActivation#aggr_egress_pps}

---

##### `aggrIngressPps`<sup>Optional</sup> <a name="aggrIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.aggrIngressPps"></a>

```java
public java.lang.String getAggrIngressPps();
```

- *Type:* java.lang.String

Aggregated ingress Packet-Per-Second for all multicast groups in the domain in this zone. Default to (aggregated_egress_pps / max_per_group_subscribers) * 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#aggr_ingress_pps NetworkServicesMulticastDomainActivation#aggr_ingress_pps}

---

##### `avgPacketSize`<sup>Optional</sup> <a name="avgPacketSize" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.avgPacketSize"></a>

```java
public java.lang.Number getAvgPacketSize();
```

- *Type:* java.lang.Number

Average packet size (Default to 512 bytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#avg_packet_size NetworkServicesMulticastDomainActivation#avg_packet_size}

---

##### `maxPerGroupIngressPps`<sup>Optional</sup> <a name="maxPerGroupIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupIngressPps"></a>

```java
public java.lang.String getMaxPerGroupIngressPps();
```

- *Type:* java.lang.String

Maximum ingress Packet-Per-Second for a single multicast group in this zone. Default to aggregated_ingress_pps / 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#max_per_group_ingress_pps NetworkServicesMulticastDomainActivation#max_per_group_ingress_pps}

---

##### `maxPerGroupSubscribers`<sup>Optional</sup> <a name="maxPerGroupSubscribers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupSubscribers"></a>

```java
public java.lang.String getMaxPerGroupSubscribers();
```

- *Type:* java.lang.String

Maximum number of subscribers for a single multicast group in this zone. Default to max(50, aggregated_egress_pps / aggregated_ingress_pps).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_domain_activation#max_per_group_subscribers NetworkServicesMulticastDomainActivation#max_per_group_subscribers}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastDomainActivationStateList <a name="NetworkServicesMulticastDomainActivationStateList" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_domain_activation.NetworkServicesMulticastDomainActivationStateList;

new NetworkServicesMulticastDomainActivationStateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.get"></a>

```java
public NetworkServicesMulticastDomainActivationStateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkServicesMulticastDomainActivationStateOutputReference <a name="NetworkServicesMulticastDomainActivationStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_domain_activation.NetworkServicesMulticastDomainActivationStateOutputReference;

new NetworkServicesMulticastDomainActivationStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationState">NetworkServicesMulticastDomainActivationState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.internalValue"></a>

```java
public NetworkServicesMulticastDomainActivationState getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationState">NetworkServicesMulticastDomainActivationState</a>

---


### NetworkServicesMulticastDomainActivationTimeoutsOutputReference <a name="NetworkServicesMulticastDomainActivationTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_domain_activation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference;

new NetworkServicesMulticastDomainActivationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkServicesMulticastDomainActivationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a>

---


### NetworkServicesMulticastDomainActivationTrafficSpecOutputReference <a name="NetworkServicesMulticastDomainActivationTrafficSpecOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_domain_activation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference;

new NetworkServicesMulticastDomainActivationTrafficSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrEgressPps">resetAggrEgressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrIngressPps">resetAggrIngressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAvgPacketSize">resetAvgPacketSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupIngressPps">resetMaxPerGroupIngressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupSubscribers">resetMaxPerGroupSubscribers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggrEgressPps` <a name="resetAggrEgressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrEgressPps"></a>

```java
public void resetAggrEgressPps()
```

##### `resetAggrIngressPps` <a name="resetAggrIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrIngressPps"></a>

```java
public void resetAggrIngressPps()
```

##### `resetAvgPacketSize` <a name="resetAvgPacketSize" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAvgPacketSize"></a>

```java
public void resetAvgPacketSize()
```

##### `resetMaxPerGroupIngressPps` <a name="resetMaxPerGroupIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupIngressPps"></a>

```java
public void resetMaxPerGroupIngressPps()
```

##### `resetMaxPerGroupSubscribers` <a name="resetMaxPerGroupSubscribers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupSubscribers"></a>

```java
public void resetMaxPerGroupSubscribers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPpsInput">aggrEgressPpsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPpsInput">aggrIngressPpsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSizeInput">avgPacketSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPpsInput">maxPerGroupIngressPpsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribersInput">maxPerGroupSubscribersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPps">aggrEgressPps</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPps">aggrIngressPps</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSize">avgPacketSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPps">maxPerGroupIngressPps</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribers">maxPerGroupSubscribers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggrEgressPpsInput`<sup>Optional</sup> <a name="aggrEgressPpsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPpsInput"></a>

```java
public java.lang.String getAggrEgressPpsInput();
```

- *Type:* java.lang.String

---

##### `aggrIngressPpsInput`<sup>Optional</sup> <a name="aggrIngressPpsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPpsInput"></a>

```java
public java.lang.String getAggrIngressPpsInput();
```

- *Type:* java.lang.String

---

##### `avgPacketSizeInput`<sup>Optional</sup> <a name="avgPacketSizeInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSizeInput"></a>

```java
public java.lang.Number getAvgPacketSizeInput();
```

- *Type:* java.lang.Number

---

##### `maxPerGroupIngressPpsInput`<sup>Optional</sup> <a name="maxPerGroupIngressPpsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPpsInput"></a>

```java
public java.lang.String getMaxPerGroupIngressPpsInput();
```

- *Type:* java.lang.String

---

##### `maxPerGroupSubscribersInput`<sup>Optional</sup> <a name="maxPerGroupSubscribersInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribersInput"></a>

```java
public java.lang.String getMaxPerGroupSubscribersInput();
```

- *Type:* java.lang.String

---

##### `aggrEgressPps`<sup>Required</sup> <a name="aggrEgressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPps"></a>

```java
public java.lang.String getAggrEgressPps();
```

- *Type:* java.lang.String

---

##### `aggrIngressPps`<sup>Required</sup> <a name="aggrIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPps"></a>

```java
public java.lang.String getAggrIngressPps();
```

- *Type:* java.lang.String

---

##### `avgPacketSize`<sup>Required</sup> <a name="avgPacketSize" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSize"></a>

```java
public java.lang.Number getAvgPacketSize();
```

- *Type:* java.lang.Number

---

##### `maxPerGroupIngressPps`<sup>Required</sup> <a name="maxPerGroupIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPps"></a>

```java
public java.lang.String getMaxPerGroupIngressPps();
```

- *Type:* java.lang.String

---

##### `maxPerGroupSubscribers`<sup>Required</sup> <a name="maxPerGroupSubscribers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribers"></a>

```java
public java.lang.String getMaxPerGroupSubscribers();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.internalValue"></a>

```java
public NetworkServicesMulticastDomainActivationTrafficSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a>

---



