# `computeNetworkEndpoint` Submodule <a name="`computeNetworkEndpoint` Submodule" id="@cdktn/provider-google.computeNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkEndpoint <a name="ComputeNetworkEndpoint" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint google_compute_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer"></a>

```java
import io.cdktn.providers.google.compute_network_endpoint.ComputeNetworkEndpoint;

ComputeNetworkEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ipAddress(java.lang.String)
    .networkEndpointGroup(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .instance(java.lang.String)
//  .port(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(ComputeNetworkEndpointTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | IPv4 address of network endpoint. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.networkEndpointGroup">networkEndpointGroup</a></code> | <code>java.lang.String</code> | The network endpoint group this endpoint is part of. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#id ComputeNetworkEndpoint#id}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The name for a specific VM instance that the IP address belongs to. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Port number of network endpoint. **Note** 'port' is required unless the Network Endpoint Group is created with the type of 'GCE_VM_IP'. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#project ComputeNetworkEndpoint#project}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts">ComputeNetworkEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the containing network endpoint group is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.ipAddress"></a>

- *Type:* java.lang.String

IPv4 address of network endpoint.

The IP address must belong
to a VM in GCE (either the primary IP or as part of an aliased IP
range).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#ip_address ComputeNetworkEndpoint#ip_address}

---

##### `networkEndpointGroup`<sup>Required</sup> <a name="networkEndpointGroup" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.networkEndpointGroup"></a>

- *Type:* java.lang.String

The network endpoint group this endpoint is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#network_endpoint_group ComputeNetworkEndpoint#network_endpoint_group}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#deletion_policy ComputeNetworkEndpoint#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#id ComputeNetworkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The name for a specific VM instance that the IP address belongs to.

This is required for network endpoints of type GCE_VM_IP_PORT.
The instance must be in the same zone of network endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#instance ComputeNetworkEndpoint#instance}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Port number of network endpoint. **Note** 'port' is required unless the Network Endpoint Group is created with the type of 'GCE_VM_IP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#port ComputeNetworkEndpoint#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#project ComputeNetworkEndpoint#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts">ComputeNetworkEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#timeouts ComputeNetworkEndpoint#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Zone where the containing network endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#zone ComputeNetworkEndpoint#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetInstance">resetInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.putTimeouts"></a>

```java
public void putTimeouts(ComputeNetworkEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts">ComputeNetworkEndpointTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetInstance` <a name="resetInstance" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetInstance"></a>

```java
public void resetInstance()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetPort"></a>

```java
public void resetPort()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeNetworkEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_network_endpoint.ComputeNetworkEndpoint;

ComputeNetworkEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_network_endpoint.ComputeNetworkEndpoint;

ComputeNetworkEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_network_endpoint.ComputeNetworkEndpoint;

ComputeNetworkEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_network_endpoint.ComputeNetworkEndpoint;

ComputeNetworkEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeNetworkEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeNetworkEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeNetworkEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeNetworkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeNetworkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference">ComputeNetworkEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.networkEndpointGroupInput">networkEndpointGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts">ComputeNetworkEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.networkEndpointGroup">networkEndpointGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.timeouts"></a>

```java
public ComputeNetworkEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference">ComputeNetworkEndpointTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `networkEndpointGroupInput`<sup>Optional</sup> <a name="networkEndpointGroupInput" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.networkEndpointGroupInput"></a>

```java
public java.lang.String getNetworkEndpointGroupInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.timeoutsInput"></a>

```java
public IResolvable|ComputeNetworkEndpointTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts">ComputeNetworkEndpointTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `networkEndpointGroup`<sup>Required</sup> <a name="networkEndpointGroup" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.networkEndpointGroup"></a>

```java
public java.lang.String getNetworkEndpointGroup();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkEndpointConfig <a name="ComputeNetworkEndpointConfig" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_network_endpoint.ComputeNetworkEndpointConfig;

ComputeNetworkEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ipAddress(java.lang.String)
    .networkEndpointGroup(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .instance(java.lang.String)
//  .port(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(ComputeNetworkEndpointTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | IPv4 address of network endpoint. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.networkEndpointGroup">networkEndpointGroup</a></code> | <code>java.lang.String</code> | The network endpoint group this endpoint is part of. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#id ComputeNetworkEndpoint#id}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The name for a specific VM instance that the IP address belongs to. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Port number of network endpoint. **Note** 'port' is required unless the Network Endpoint Group is created with the type of 'GCE_VM_IP'. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#project ComputeNetworkEndpoint#project}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts">ComputeNetworkEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the containing network endpoint group is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

IPv4 address of network endpoint.

The IP address must belong
to a VM in GCE (either the primary IP or as part of an aliased IP
range).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#ip_address ComputeNetworkEndpoint#ip_address}

---

##### `networkEndpointGroup`<sup>Required</sup> <a name="networkEndpointGroup" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.networkEndpointGroup"></a>

```java
public java.lang.String getNetworkEndpointGroup();
```

- *Type:* java.lang.String

The network endpoint group this endpoint is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#network_endpoint_group ComputeNetworkEndpoint#network_endpoint_group}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#deletion_policy ComputeNetworkEndpoint#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#id ComputeNetworkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The name for a specific VM instance that the IP address belongs to.

This is required for network endpoints of type GCE_VM_IP_PORT.
The instance must be in the same zone of network endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#instance ComputeNetworkEndpoint#instance}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port number of network endpoint. **Note** 'port' is required unless the Network Endpoint Group is created with the type of 'GCE_VM_IP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#port ComputeNetworkEndpoint#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#project ComputeNetworkEndpoint#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.timeouts"></a>

```java
public ComputeNetworkEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts">ComputeNetworkEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#timeouts ComputeNetworkEndpoint#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Zone where the containing network endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#zone ComputeNetworkEndpoint#zone}

---

### ComputeNetworkEndpointTimeouts <a name="ComputeNetworkEndpointTimeouts" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.compute_network_endpoint.ComputeNetworkEndpointTimeouts;

ComputeNetworkEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#create ComputeNetworkEndpoint#create}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#delete ComputeNetworkEndpoint#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#create ComputeNetworkEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_endpoint#delete ComputeNetworkEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkEndpointTimeoutsOutputReference <a name="ComputeNetworkEndpointTimeoutsOutputReference" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_network_endpoint.ComputeNetworkEndpointTimeoutsOutputReference;

new ComputeNetworkEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts">ComputeNetworkEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeNetworkEndpointTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts">ComputeNetworkEndpointTimeouts</a>

---



