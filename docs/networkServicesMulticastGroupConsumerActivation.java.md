# `networkServicesMulticastGroupConsumerActivation` Submodule <a name="`networkServicesMulticastGroupConsumerActivation` Submodule" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastGroupConsumerActivation <a name="NetworkServicesMulticastGroupConsumerActivation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation google_network_services_multicast_group_consumer_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_consumer_activation.NetworkServicesMulticastGroupConsumerActivation;

NetworkServicesMulticastGroupConsumerActivation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .multicastConsumerAssociation(java.lang.String)
    .multicastGroupConsumerActivationId(java.lang.String)
    .multicastGroupRangeActivation(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .logConfig(NetworkServicesMulticastGroupConsumerActivationLogConfig)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesMulticastGroupConsumerActivationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.multicastConsumerAssociation">multicastConsumerAssociation</a></code> | <code>java.lang.String</code> | The resource name of the multicast consumer association that is in the same zone as this multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.multicastGroupConsumerActivationId">multicastGroupConsumerActivationId</a></code> | <code>java.lang.String</code> | A unique name for the multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.multicastGroupRangeActivation">multicastGroupRangeActivation</a></code> | <code>java.lang.String</code> | The resource name of the multicast group range activation created by the admin in the same zone as this multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional text description of the multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#id NetworkServicesMulticastGroupConsumerActivation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#project NetworkServicesMulticastGroupConsumerActivation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#location NetworkServicesMulticastGroupConsumerActivation#location}

---

##### `multicastConsumerAssociation`<sup>Required</sup> <a name="multicastConsumerAssociation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.multicastConsumerAssociation"></a>

- *Type:* java.lang.String

The resource name of the multicast consumer association that is in the same zone as this multicast group consumer activation.

Use the following format:
'projects/* /locations/* /multicastConsumerAssociations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#multicast_consumer_association NetworkServicesMulticastGroupConsumerActivation#multicast_consumer_association}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicastGroupConsumerActivationId`<sup>Required</sup> <a name="multicastGroupConsumerActivationId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.multicastGroupConsumerActivationId"></a>

- *Type:* java.lang.String

A unique name for the multicast group consumer activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#multicast_group_consumer_activation_id NetworkServicesMulticastGroupConsumerActivation#multicast_group_consumer_activation_id}

---

##### `multicastGroupRangeActivation`<sup>Required</sup> <a name="multicastGroupRangeActivation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.multicastGroupRangeActivation"></a>

- *Type:* java.lang.String

The resource name of the multicast group range activation created by the admin in the same zone as this multicast group consumer activation.

Use the
following format:
// 'projects/* /locations/* /multicastGroupRangeActivations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#multicast_group_range_activation NetworkServicesMulticastGroupConsumerActivation#multicast_group_range_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional text description of the multicast group consumer activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#description NetworkServicesMulticastGroupConsumerActivation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#id NetworkServicesMulticastGroupConsumerActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#labels NetworkServicesMulticastGroupConsumerActivation#labels}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#log_config NetworkServicesMulticastGroupConsumerActivation#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#project NetworkServicesMulticastGroupConsumerActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#timeouts NetworkServicesMulticastGroupConsumerActivation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putLogConfig"></a>

```java
public void putLogConfig(NetworkServicesMulticastGroupConsumerActivationLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putTimeouts"></a>

```java
public void putTimeouts(NetworkServicesMulticastGroupConsumerActivationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetLogConfig"></a>

```java
public void resetLogConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastGroupConsumerActivation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isConstruct"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_consumer_activation.NetworkServicesMulticastGroupConsumerActivation;

NetworkServicesMulticastGroupConsumerActivation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformElement"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_consumer_activation.NetworkServicesMulticastGroupConsumerActivation;

NetworkServicesMulticastGroupConsumerActivation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformResource"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_consumer_activation.NetworkServicesMulticastGroupConsumerActivation;

NetworkServicesMulticastGroupConsumerActivation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_consumer_activation.NetworkServicesMulticastGroupConsumerActivation;

NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkServicesMulticastGroupConsumerActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkServicesMulticastGroupConsumerActivation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkServicesMulticastGroupConsumerActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastGroupConsumerActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference">NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.state">state</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList">NetworkServicesMulticastGroupConsumerActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference">NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.uniqueId">uniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociationInput">multicastConsumerAssociationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationIdInput">multicastGroupConsumerActivationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivationInput">multicastGroupRangeActivationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociation">multicastConsumerAssociation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationId">multicastGroupConsumerActivationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivation">multicastGroupRangeActivation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.logConfig"></a>

```java
public NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference">NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.state"></a>

```java
public NetworkServicesMulticastGroupConsumerActivationStateList getState();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList">NetworkServicesMulticastGroupConsumerActivationStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.timeouts"></a>

```java
public NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference">NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.uniqueId"></a>

```java
public java.lang.String getUniqueId();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.logConfigInput"></a>

```java
public NetworkServicesMulticastGroupConsumerActivationLogConfig getLogConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a>

---

##### `multicastConsumerAssociationInput`<sup>Optional</sup> <a name="multicastConsumerAssociationInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociationInput"></a>

```java
public java.lang.String getMulticastConsumerAssociationInput();
```

- *Type:* java.lang.String

---

##### `multicastGroupConsumerActivationIdInput`<sup>Optional</sup> <a name="multicastGroupConsumerActivationIdInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationIdInput"></a>

```java
public java.lang.String getMulticastGroupConsumerActivationIdInput();
```

- *Type:* java.lang.String

---

##### `multicastGroupRangeActivationInput`<sup>Optional</sup> <a name="multicastGroupRangeActivationInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivationInput"></a>

```java
public java.lang.String getMulticastGroupRangeActivationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.timeoutsInput"></a>

```java
public IResolvable|NetworkServicesMulticastGroupConsumerActivationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `multicastConsumerAssociation`<sup>Required</sup> <a name="multicastConsumerAssociation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociation"></a>

```java
public java.lang.String getMulticastConsumerAssociation();
```

- *Type:* java.lang.String

---

##### `multicastGroupConsumerActivationId`<sup>Required</sup> <a name="multicastGroupConsumerActivationId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationId"></a>

```java
public java.lang.String getMulticastGroupConsumerActivationId();
```

- *Type:* java.lang.String

---

##### `multicastGroupRangeActivation`<sup>Required</sup> <a name="multicastGroupRangeActivation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivation"></a>

```java
public java.lang.String getMulticastGroupRangeActivation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastGroupConsumerActivationConfig <a name="NetworkServicesMulticastGroupConsumerActivationConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_consumer_activation.NetworkServicesMulticastGroupConsumerActivationConfig;

NetworkServicesMulticastGroupConsumerActivationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .multicastConsumerAssociation(java.lang.String)
    .multicastGroupConsumerActivationId(java.lang.String)
    .multicastGroupRangeActivation(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .logConfig(NetworkServicesMulticastGroupConsumerActivationLogConfig)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesMulticastGroupConsumerActivationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastConsumerAssociation">multicastConsumerAssociation</a></code> | <code>java.lang.String</code> | The resource name of the multicast consumer association that is in the same zone as this multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupConsumerActivationId">multicastGroupConsumerActivationId</a></code> | <code>java.lang.String</code> | A unique name for the multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupRangeActivation">multicastGroupRangeActivation</a></code> | <code>java.lang.String</code> | The resource name of the multicast group range activation created by the admin in the same zone as this multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional text description of the multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#id NetworkServicesMulticastGroupConsumerActivation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#project NetworkServicesMulticastGroupConsumerActivation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#location NetworkServicesMulticastGroupConsumerActivation#location}

---

##### `multicastConsumerAssociation`<sup>Required</sup> <a name="multicastConsumerAssociation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastConsumerAssociation"></a>

```java
public java.lang.String getMulticastConsumerAssociation();
```

- *Type:* java.lang.String

The resource name of the multicast consumer association that is in the same zone as this multicast group consumer activation.

Use the following format:
'projects/* /locations/* /multicastConsumerAssociations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#multicast_consumer_association NetworkServicesMulticastGroupConsumerActivation#multicast_consumer_association}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicastGroupConsumerActivationId`<sup>Required</sup> <a name="multicastGroupConsumerActivationId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupConsumerActivationId"></a>

```java
public java.lang.String getMulticastGroupConsumerActivationId();
```

- *Type:* java.lang.String

A unique name for the multicast group consumer activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#multicast_group_consumer_activation_id NetworkServicesMulticastGroupConsumerActivation#multicast_group_consumer_activation_id}

---

##### `multicastGroupRangeActivation`<sup>Required</sup> <a name="multicastGroupRangeActivation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupRangeActivation"></a>

```java
public java.lang.String getMulticastGroupRangeActivation();
```

- *Type:* java.lang.String

The resource name of the multicast group range activation created by the admin in the same zone as this multicast group consumer activation.

Use the
following format:
// 'projects/* /locations/* /multicastGroupRangeActivations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#multicast_group_range_activation NetworkServicesMulticastGroupConsumerActivation#multicast_group_range_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional text description of the multicast group consumer activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#description NetworkServicesMulticastGroupConsumerActivation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#id NetworkServicesMulticastGroupConsumerActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#labels NetworkServicesMulticastGroupConsumerActivation#labels}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.logConfig"></a>

```java
public NetworkServicesMulticastGroupConsumerActivationLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#log_config NetworkServicesMulticastGroupConsumerActivation#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#project NetworkServicesMulticastGroupConsumerActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.timeouts"></a>

```java
public NetworkServicesMulticastGroupConsumerActivationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#timeouts NetworkServicesMulticastGroupConsumerActivation#timeouts}

---

### NetworkServicesMulticastGroupConsumerActivationLogConfig <a name="NetworkServicesMulticastGroupConsumerActivationLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_consumer_activation.NetworkServicesMulticastGroupConsumerActivationLogConfig;

NetworkServicesMulticastGroupConsumerActivationLogConfig.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable logging or not. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable logging or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#enabled NetworkServicesMulticastGroupConsumerActivation#enabled}

---

### NetworkServicesMulticastGroupConsumerActivationState <a name="NetworkServicesMulticastGroupConsumerActivationState" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationState.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_consumer_activation.NetworkServicesMulticastGroupConsumerActivationState;

NetworkServicesMulticastGroupConsumerActivationState.builder()
    .build();
```


### NetworkServicesMulticastGroupConsumerActivationTimeouts <a name="NetworkServicesMulticastGroupConsumerActivationTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_consumer_activation.NetworkServicesMulticastGroupConsumerActivationTimeouts;

NetworkServicesMulticastGroupConsumerActivationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#create NetworkServicesMulticastGroupConsumerActivation#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#delete NetworkServicesMulticastGroupConsumerActivation#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#update NetworkServicesMulticastGroupConsumerActivation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#create NetworkServicesMulticastGroupConsumerActivation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#delete NetworkServicesMulticastGroupConsumerActivation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_services_multicast_group_consumer_activation#update NetworkServicesMulticastGroupConsumerActivation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference <a name="NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_consumer_activation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference;

new NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.internalValue"></a>

```java
public NetworkServicesMulticastGroupConsumerActivationLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a>

---


### NetworkServicesMulticastGroupConsumerActivationStateList <a name="NetworkServicesMulticastGroupConsumerActivationStateList" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_consumer_activation.NetworkServicesMulticastGroupConsumerActivationStateList;

new NetworkServicesMulticastGroupConsumerActivationStateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.get"></a>

```java
public NetworkServicesMulticastGroupConsumerActivationStateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkServicesMulticastGroupConsumerActivationStateOutputReference <a name="NetworkServicesMulticastGroupConsumerActivationStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_consumer_activation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference;

new NetworkServicesMulticastGroupConsumerActivationStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationState">NetworkServicesMulticastGroupConsumerActivationState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.internalValue"></a>

```java
public NetworkServicesMulticastGroupConsumerActivationState getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationState">NetworkServicesMulticastGroupConsumerActivationState</a>

---


### NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference <a name="NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_consumer_activation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference;

new NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkServicesMulticastGroupConsumerActivationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a>

---



