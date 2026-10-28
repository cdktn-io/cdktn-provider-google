# `dnsOutboundEndpoint` Submodule <a name="`dnsOutboundEndpoint` Submodule" id="@cdktn/provider-google.dnsOutboundEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsOutboundEndpoint <a name="DnsOutboundEndpoint" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint google_dns_outbound_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer"></a>

```java
import io.cdktn.providers.google.dns_outbound_endpoint.DnsOutboundEndpoint;

DnsOutboundEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .network(java.lang.String)
    .subnetwork(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .endpointIp(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(DnsOutboundEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the OutboundEndpoint. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the OutboundEndpoint. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The VPC network containing the outbound endpoint, specified as full path. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The subnetwork holding the endpoint_ip, specified as full path. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations as key value pairs. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User provided description. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.endpointIp">endpointIp</a></code> | <code>java.lang.String</code> | User provided IP address to use for outbound DNS forwarding. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#id DnsOutboundEndpoint#id}. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#project DnsOutboundEndpoint#project}. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts">DnsOutboundEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the OutboundEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#location DnsOutboundEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the OutboundEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#name DnsOutboundEndpoint#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The VPC network containing the outbound endpoint, specified as full path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#network DnsOutboundEndpoint#network}

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.subnetwork"></a>

- *Type:* java.lang.String

The subnetwork holding the endpoint_ip, specified as full path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#subnetwork DnsOutboundEndpoint#subnetwork}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations as key value pairs.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#annotations DnsOutboundEndpoint#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#deletion_policy DnsOutboundEndpoint#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User provided description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#description DnsOutboundEndpoint#description}

---

##### `endpointIp`<sup>Optional</sup> <a name="endpointIp" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.endpointIp"></a>

- *Type:* java.lang.String

User provided IP address to use for outbound DNS forwarding.

This address
must be a free address on the subnetwork. If omitted, a free IP address
from the subnetwork is automatically allocated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#endpoint_ip DnsOutboundEndpoint#endpoint_ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#id DnsOutboundEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#labels DnsOutboundEndpoint#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#project DnsOutboundEndpoint#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts">DnsOutboundEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#timeouts DnsOutboundEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetEndpointIp">resetEndpointIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.putTimeouts"></a>

```java
public void putTimeouts(DnsOutboundEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts">DnsOutboundEndpointTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEndpointIp` <a name="resetEndpointIp" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetEndpointIp"></a>

```java
public void resetEndpointIp()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DnsOutboundEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.google.dns_outbound_endpoint.DnsOutboundEndpoint;

DnsOutboundEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.google.dns_outbound_endpoint.DnsOutboundEndpoint;

DnsOutboundEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.google.dns_outbound_endpoint.DnsOutboundEndpoint;

DnsOutboundEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.dns_outbound_endpoint.DnsOutboundEndpoint;

DnsOutboundEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DnsOutboundEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DnsOutboundEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DnsOutboundEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DnsOutboundEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DnsOutboundEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference">DnsOutboundEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.endpointIpInput">endpointIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts">DnsOutboundEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.endpointIp">endpointIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.timeouts"></a>

```java
public DnsOutboundEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference">DnsOutboundEndpointTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `endpointIpInput`<sup>Optional</sup> <a name="endpointIpInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.endpointIpInput"></a>

```java
public java.lang.String getEndpointIpInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.timeoutsInput"></a>

```java
public IResolvable|DnsOutboundEndpointTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts">DnsOutboundEndpointTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endpointIp`<sup>Required</sup> <a name="endpointIp" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.endpointIp"></a>

```java
public java.lang.String getEndpointIp();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DnsOutboundEndpointConfig <a name="DnsOutboundEndpointConfig" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dns_outbound_endpoint.DnsOutboundEndpointConfig;

DnsOutboundEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .network(java.lang.String)
    .subnetwork(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .endpointIp(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(DnsOutboundEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the OutboundEndpoint. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the OutboundEndpoint. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.network">network</a></code> | <code>java.lang.String</code> | The VPC network containing the outbound endpoint, specified as full path. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The subnetwork holding the endpoint_ip, specified as full path. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations as key value pairs. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.description">description</a></code> | <code>java.lang.String</code> | User provided description. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.endpointIp">endpointIp</a></code> | <code>java.lang.String</code> | User provided IP address to use for outbound DNS forwarding. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#id DnsOutboundEndpoint#id}. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#project DnsOutboundEndpoint#project}. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts">DnsOutboundEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the OutboundEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#location DnsOutboundEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the OutboundEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#name DnsOutboundEndpoint#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The VPC network containing the outbound endpoint, specified as full path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#network DnsOutboundEndpoint#network}

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The subnetwork holding the endpoint_ip, specified as full path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#subnetwork DnsOutboundEndpoint#subnetwork}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations as key value pairs.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#annotations DnsOutboundEndpoint#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#deletion_policy DnsOutboundEndpoint#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User provided description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#description DnsOutboundEndpoint#description}

---

##### `endpointIp`<sup>Optional</sup> <a name="endpointIp" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.endpointIp"></a>

```java
public java.lang.String getEndpointIp();
```

- *Type:* java.lang.String

User provided IP address to use for outbound DNS forwarding.

This address
must be a free address on the subnetwork. If omitted, a free IP address
from the subnetwork is automatically allocated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#endpoint_ip DnsOutboundEndpoint#endpoint_ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#id DnsOutboundEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#labels DnsOutboundEndpoint#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#project DnsOutboundEndpoint#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.timeouts"></a>

```java
public DnsOutboundEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts">DnsOutboundEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#timeouts DnsOutboundEndpoint#timeouts}

---

### DnsOutboundEndpointTimeouts <a name="DnsOutboundEndpointTimeouts" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.dns_outbound_endpoint.DnsOutboundEndpointTimeouts;

DnsOutboundEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#create DnsOutboundEndpoint#create}. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#delete DnsOutboundEndpoint#delete}. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#update DnsOutboundEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#create DnsOutboundEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#delete DnsOutboundEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#update DnsOutboundEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsOutboundEndpointTimeoutsOutputReference <a name="DnsOutboundEndpointTimeoutsOutputReference" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dns_outbound_endpoint.DnsOutboundEndpointTimeoutsOutputReference;

new DnsOutboundEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts">DnsOutboundEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DnsOutboundEndpointTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts">DnsOutboundEndpointTimeouts</a>

---



