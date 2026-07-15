# `networkServicesMulticastGroupProducerActivation` Submodule <a name="`networkServicesMulticastGroupProducerActivation` Submodule" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastGroupProducerActivation <a name="NetworkServicesMulticastGroupProducerActivation" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation google_network_services_multicast_group_producer_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_producer_activation.NetworkServicesMulticastGroupProducerActivation;

NetworkServicesMulticastGroupProducerActivation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .multicastGroupProducerActivationId(java.lang.String)
    .multicastGroupRangeActivation(java.lang.String)
    .multicastProducerAssociation(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesMulticastGroupProducerActivationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastGroupProducerActivationId">multicastGroupProducerActivationId</a></code> | <code>java.lang.String</code> | A unique name for the multicast group producer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastGroupRangeActivation">multicastGroupRangeActivation</a></code> | <code>java.lang.String</code> | The resource name of the multicast group range activationcreated by the admin in the same zone as this multicast group producer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastProducerAssociation">multicastProducerAssociation</a></code> | <code>java.lang.String</code> | The resource name of the multicast producer association that is in the same zone as this multicast group producer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional text description of the multicast group producer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#id NetworkServicesMulticastGroupProducerActivation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#project NetworkServicesMulticastGroupProducerActivation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts">NetworkServicesMulticastGroupProducerActivationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#location NetworkServicesMulticastGroupProducerActivation#location}

---

##### `multicastGroupProducerActivationId`<sup>Required</sup> <a name="multicastGroupProducerActivationId" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastGroupProducerActivationId"></a>

- *Type:* java.lang.String

A unique name for the multicast group producer activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#multicast_group_producer_activation_id NetworkServicesMulticastGroupProducerActivation#multicast_group_producer_activation_id}

---

##### `multicastGroupRangeActivation`<sup>Required</sup> <a name="multicastGroupRangeActivation" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastGroupRangeActivation"></a>

- *Type:* java.lang.String

The resource name of the multicast group range activationcreated by the admin in the same zone as this multicast group producer activation.

Use the
following format:
// 'projects/* /locations/* /multicastGroupRangeActivations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#multicast_group_range_activation NetworkServicesMulticastGroupProducerActivation#multicast_group_range_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicastProducerAssociation`<sup>Required</sup> <a name="multicastProducerAssociation" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastProducerAssociation"></a>

- *Type:* java.lang.String

The resource name of the multicast producer association that is in the same zone as this multicast group producer activation.

Use the following format:
'projects/* /locations/* /multicastProducerAssociations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#multicast_producer_association NetworkServicesMulticastGroupProducerActivation#multicast_producer_association}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#deletion_policy NetworkServicesMulticastGroupProducerActivation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional text description of the multicast group producer activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#description NetworkServicesMulticastGroupProducerActivation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#id NetworkServicesMulticastGroupProducerActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#labels NetworkServicesMulticastGroupProducerActivation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#project NetworkServicesMulticastGroupProducerActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts">NetworkServicesMulticastGroupProducerActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#timeouts NetworkServicesMulticastGroupProducerActivation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.putTimeouts"></a>

```java
public void putTimeouts(NetworkServicesMulticastGroupProducerActivationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts">NetworkServicesMulticastGroupProducerActivationTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastGroupProducerActivation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isConstruct"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_producer_activation.NetworkServicesMulticastGroupProducerActivation;

NetworkServicesMulticastGroupProducerActivation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isTerraformElement"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_producer_activation.NetworkServicesMulticastGroupProducerActivation;

NetworkServicesMulticastGroupProducerActivation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isTerraformResource"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_producer_activation.NetworkServicesMulticastGroupProducerActivation;

NetworkServicesMulticastGroupProducerActivation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_producer_activation.NetworkServicesMulticastGroupProducerActivation;

NetworkServicesMulticastGroupProducerActivation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkServicesMulticastGroupProducerActivation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkServicesMulticastGroupProducerActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkServicesMulticastGroupProducerActivation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkServicesMulticastGroupProducerActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastGroupProducerActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.state">state</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList">NetworkServicesMulticastGroupProducerActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference">NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.uniqueId">uniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastGroupProducerActivationIdInput">multicastGroupProducerActivationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastGroupRangeActivationInput">multicastGroupRangeActivationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastProducerAssociationInput">multicastProducerAssociationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts">NetworkServicesMulticastGroupProducerActivationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastGroupProducerActivationId">multicastGroupProducerActivationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastGroupRangeActivation">multicastGroupRangeActivation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastProducerAssociation">multicastProducerAssociation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.state"></a>

```java
public NetworkServicesMulticastGroupProducerActivationStateList getState();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList">NetworkServicesMulticastGroupProducerActivationStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.timeouts"></a>

```java
public NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference">NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.uniqueId"></a>

```java
public java.lang.String getUniqueId();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `multicastGroupProducerActivationIdInput`<sup>Optional</sup> <a name="multicastGroupProducerActivationIdInput" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastGroupProducerActivationIdInput"></a>

```java
public java.lang.String getMulticastGroupProducerActivationIdInput();
```

- *Type:* java.lang.String

---

##### `multicastGroupRangeActivationInput`<sup>Optional</sup> <a name="multicastGroupRangeActivationInput" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastGroupRangeActivationInput"></a>

```java
public java.lang.String getMulticastGroupRangeActivationInput();
```

- *Type:* java.lang.String

---

##### `multicastProducerAssociationInput`<sup>Optional</sup> <a name="multicastProducerAssociationInput" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastProducerAssociationInput"></a>

```java
public java.lang.String getMulticastProducerAssociationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.timeoutsInput"></a>

```java
public IResolvable|NetworkServicesMulticastGroupProducerActivationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts">NetworkServicesMulticastGroupProducerActivationTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `multicastGroupProducerActivationId`<sup>Required</sup> <a name="multicastGroupProducerActivationId" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastGroupProducerActivationId"></a>

```java
public java.lang.String getMulticastGroupProducerActivationId();
```

- *Type:* java.lang.String

---

##### `multicastGroupRangeActivation`<sup>Required</sup> <a name="multicastGroupRangeActivation" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastGroupRangeActivation"></a>

```java
public java.lang.String getMulticastGroupRangeActivation();
```

- *Type:* java.lang.String

---

##### `multicastProducerAssociation`<sup>Required</sup> <a name="multicastProducerAssociation" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastProducerAssociation"></a>

```java
public java.lang.String getMulticastProducerAssociation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastGroupProducerActivationConfig <a name="NetworkServicesMulticastGroupProducerActivationConfig" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_producer_activation.NetworkServicesMulticastGroupProducerActivationConfig;

NetworkServicesMulticastGroupProducerActivationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .multicastGroupProducerActivationId(java.lang.String)
    .multicastGroupRangeActivation(java.lang.String)
    .multicastProducerAssociation(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesMulticastGroupProducerActivationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.multicastGroupProducerActivationId">multicastGroupProducerActivationId</a></code> | <code>java.lang.String</code> | A unique name for the multicast group producer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.multicastGroupRangeActivation">multicastGroupRangeActivation</a></code> | <code>java.lang.String</code> | The resource name of the multicast group range activationcreated by the admin in the same zone as this multicast group producer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.multicastProducerAssociation">multicastProducerAssociation</a></code> | <code>java.lang.String</code> | The resource name of the multicast producer association that is in the same zone as this multicast group producer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional text description of the multicast group producer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#id NetworkServicesMulticastGroupProducerActivation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#project NetworkServicesMulticastGroupProducerActivation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts">NetworkServicesMulticastGroupProducerActivationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#location NetworkServicesMulticastGroupProducerActivation#location}

---

##### `multicastGroupProducerActivationId`<sup>Required</sup> <a name="multicastGroupProducerActivationId" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.multicastGroupProducerActivationId"></a>

```java
public java.lang.String getMulticastGroupProducerActivationId();
```

- *Type:* java.lang.String

A unique name for the multicast group producer activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#multicast_group_producer_activation_id NetworkServicesMulticastGroupProducerActivation#multicast_group_producer_activation_id}

---

##### `multicastGroupRangeActivation`<sup>Required</sup> <a name="multicastGroupRangeActivation" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.multicastGroupRangeActivation"></a>

```java
public java.lang.String getMulticastGroupRangeActivation();
```

- *Type:* java.lang.String

The resource name of the multicast group range activationcreated by the admin in the same zone as this multicast group producer activation.

Use the
following format:
// 'projects/* /locations/* /multicastGroupRangeActivations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#multicast_group_range_activation NetworkServicesMulticastGroupProducerActivation#multicast_group_range_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicastProducerAssociation`<sup>Required</sup> <a name="multicastProducerAssociation" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.multicastProducerAssociation"></a>

```java
public java.lang.String getMulticastProducerAssociation();
```

- *Type:* java.lang.String

The resource name of the multicast producer association that is in the same zone as this multicast group producer activation.

Use the following format:
'projects/* /locations/* /multicastProducerAssociations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#multicast_producer_association NetworkServicesMulticastGroupProducerActivation#multicast_producer_association}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#deletion_policy NetworkServicesMulticastGroupProducerActivation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional text description of the multicast group producer activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#description NetworkServicesMulticastGroupProducerActivation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#id NetworkServicesMulticastGroupProducerActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#labels NetworkServicesMulticastGroupProducerActivation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#project NetworkServicesMulticastGroupProducerActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.timeouts"></a>

```java
public NetworkServicesMulticastGroupProducerActivationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts">NetworkServicesMulticastGroupProducerActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#timeouts NetworkServicesMulticastGroupProducerActivation#timeouts}

---

### NetworkServicesMulticastGroupProducerActivationState <a name="NetworkServicesMulticastGroupProducerActivationState" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationState.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_producer_activation.NetworkServicesMulticastGroupProducerActivationState;

NetworkServicesMulticastGroupProducerActivationState.builder()
    .build();
```


### NetworkServicesMulticastGroupProducerActivationTimeouts <a name="NetworkServicesMulticastGroupProducerActivationTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_producer_activation.NetworkServicesMulticastGroupProducerActivationTimeouts;

NetworkServicesMulticastGroupProducerActivationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#create NetworkServicesMulticastGroupProducerActivation#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#delete NetworkServicesMulticastGroupProducerActivation#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#update NetworkServicesMulticastGroupProducerActivation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#create NetworkServicesMulticastGroupProducerActivation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#delete NetworkServicesMulticastGroupProducerActivation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_producer_activation#update NetworkServicesMulticastGroupProducerActivation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastGroupProducerActivationStateList <a name="NetworkServicesMulticastGroupProducerActivationStateList" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_producer_activation.NetworkServicesMulticastGroupProducerActivationStateList;

new NetworkServicesMulticastGroupProducerActivationStateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.get"></a>

```java
public NetworkServicesMulticastGroupProducerActivationStateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkServicesMulticastGroupProducerActivationStateOutputReference <a name="NetworkServicesMulticastGroupProducerActivationStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_producer_activation.NetworkServicesMulticastGroupProducerActivationStateOutputReference;

new NetworkServicesMulticastGroupProducerActivationStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationState">NetworkServicesMulticastGroupProducerActivationState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.property.internalValue"></a>

```java
public NetworkServicesMulticastGroupProducerActivationState getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationState">NetworkServicesMulticastGroupProducerActivationState</a>

---


### NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference <a name="NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_producer_activation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference;

new NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts">NetworkServicesMulticastGroupProducerActivationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkServicesMulticastGroupProducerActivationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts">NetworkServicesMulticastGroupProducerActivationTimeouts</a>

---



