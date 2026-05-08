# `vpcAccessConnector` Submodule <a name="`vpcAccessConnector` Submodule" id="@cdktn/provider-google.vpcAccessConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcAccessConnector <a name="VpcAccessConnector" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector google_vpc_access_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer"></a>

```java
import io.cdktn.providers.google.vpc_access_connector.VpcAccessConnector;

VpcAccessConnector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .ipCidrRange(java.lang.String)
//  .machineType(java.lang.String)
//  .maxInstances(java.lang.Number)
//  .maxThroughput(java.lang.Number)
//  .minInstances(java.lang.Number)
//  .minThroughput(java.lang.Number)
//  .network(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .subnet(VpcAccessConnectorSubnet)
//  .timeouts(VpcAccessConnectorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the resource (Max 25 characters). |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#id VpcAccessConnector#id}. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.machineType">machineType</a></code> | <code>java.lang.String</code> | Machine type of VM Instance underlying connector. Default is e2-micro. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | Maximum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.maxThroughput">maxThroughput</a></code> | <code>java.lang.Number</code> | Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | Minimum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.minThroughput">minThroughput</a></code> | <code>java.lang.Number</code> | Minimum throughput of the connector in Mbps. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | Name or self_link of the VPC network. Required if 'ip_cidr_range' is set. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#project VpcAccessConnector#project}. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where the VPC Access connector resides. If it is not provided, the provider region is used. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.subnet">subnet</a></code> | <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a></code> | subnet block. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the resource (Max 25 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#name VpcAccessConnector#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#id VpcAccessConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.ipCidrRange"></a>

- *Type:* java.lang.String

The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#ip_cidr_range VpcAccessConnector#ip_cidr_range}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.machineType"></a>

- *Type:* java.lang.String

Machine type of VM Instance underlying connector. Default is e2-micro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#machine_type VpcAccessConnector#machine_type}

---

##### `maxInstances`<sup>Optional</sup> <a name="maxInstances" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.maxInstances"></a>

- *Type:* java.lang.Number

Maximum value of instances in autoscaling group underlying the connector.

Value must be between 3 and 10, inclusive. Must be
higher than the value specified by min_instances. Required alongside 'min_instances' if not using 'min_throughput'/'max_throughput'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#max_instances VpcAccessConnector#max_instances}

---

##### `maxThroughput`<sup>Optional</sup> <a name="maxThroughput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.maxThroughput"></a>

- *Type:* java.lang.Number

Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'.

Default is 300. Refers to the expected throughput
when using an e2-micro machine type. Value must be a multiple of 100 from 300 through 1000. Must be higher than the value specified by
min_throughput. Only one of 'max_throughput' and 'max_instances' can be specified. The use of max_throughput is discouraged in favor of max_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#max_throughput VpcAccessConnector#max_throughput}

---

##### `minInstances`<sup>Optional</sup> <a name="minInstances" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.minInstances"></a>

- *Type:* java.lang.Number

Minimum value of instances in autoscaling group underlying the connector.

Value must be between 2 and 9, inclusive. Must be
lower than the value specified by max_instances. Required alongside 'max_instances' if not using 'min_throughput'/'max_throughput'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#min_instances VpcAccessConnector#min_instances}

---

##### `minThroughput`<sup>Optional</sup> <a name="minThroughput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.minThroughput"></a>

- *Type:* java.lang.Number

Minimum throughput of the connector in Mbps.

Default and min is 200. Refers to the expected throughput when using an e2-micro machine type.
Value must be a multiple of 100 from 200 through 900. Must be lower than the value specified by max_throughput.
Only one of 'min_throughput' and 'min_instances' can be specified. The use of min_throughput is discouraged in favor of min_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#min_throughput VpcAccessConnector#min_throughput}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.network"></a>

- *Type:* java.lang.String

Name or self_link of the VPC network. Required if 'ip_cidr_range' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#network VpcAccessConnector#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#project VpcAccessConnector#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where the VPC Access connector resides. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#region VpcAccessConnector#region}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.subnet"></a>

- *Type:* <a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#subnet VpcAccessConnector#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#timeouts VpcAccessConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.putSubnet">putSubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetIpCidrRange">resetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetMaxInstances">resetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetMaxThroughput">resetMaxThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetMinInstances">resetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetMinThroughput">resetMinThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSubnet` <a name="putSubnet" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.putSubnet"></a>

```java
public void putSubnet(VpcAccessConnectorSubnet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.putSubnet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.putTimeouts"></a>

```java
public void putTimeouts(VpcAccessConnectorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetId"></a>

```java
public void resetId()
```

##### `resetIpCidrRange` <a name="resetIpCidrRange" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetIpCidrRange"></a>

```java
public void resetIpCidrRange()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetMaxInstances` <a name="resetMaxInstances" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetMaxInstances"></a>

```java
public void resetMaxInstances()
```

##### `resetMaxThroughput` <a name="resetMaxThroughput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetMaxThroughput"></a>

```java
public void resetMaxThroughput()
```

##### `resetMinInstances` <a name="resetMinInstances" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetMinInstances"></a>

```java
public void resetMinInstances()
```

##### `resetMinThroughput` <a name="resetMinThroughput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetMinThroughput"></a>

```java
public void resetMinThroughput()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetSubnet"></a>

```java
public void resetSubnet()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VpcAccessConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.isConstruct"></a>

```java
import io.cdktn.providers.google.vpc_access_connector.VpcAccessConnector;

VpcAccessConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformElement"></a>

```java
import io.cdktn.providers.google.vpc_access_connector.VpcAccessConnector;

VpcAccessConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformResource"></a>

```java
import io.cdktn.providers.google.vpc_access_connector.VpcAccessConnector;

VpcAccessConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.vpc_access_connector.VpcAccessConnector;

VpcAccessConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpcAccessConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VpcAccessConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpcAccessConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpcAccessConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VpcAccessConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.connectedProjects">connectedProjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.subnet">subnet</a></code> | <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference">VpcAccessConnectorSubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference">VpcAccessConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxInstancesInput">maxInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxThroughputInput">maxThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.minInstancesInput">minInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.minThroughputInput">minThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.subnetInput">subnetInput</a></code> | <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxThroughput">maxThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.minThroughput">minThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectedProjects`<sup>Required</sup> <a name="connectedProjects" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.connectedProjects"></a>

```java
public java.util.List<java.lang.String> getConnectedProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.subnet"></a>

```java
public VpcAccessConnectorSubnetOutputReference getSubnet();
```

- *Type:* <a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference">VpcAccessConnectorSubnetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.timeouts"></a>

```java
public VpcAccessConnectorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference">VpcAccessConnectorTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.ipCidrRangeInput"></a>

```java
public java.lang.String getIpCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `maxInstancesInput`<sup>Optional</sup> <a name="maxInstancesInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxInstancesInput"></a>

```java
public java.lang.Number getMaxInstancesInput();
```

- *Type:* java.lang.Number

---

##### `maxThroughputInput`<sup>Optional</sup> <a name="maxThroughputInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxThroughputInput"></a>

```java
public java.lang.Number getMaxThroughputInput();
```

- *Type:* java.lang.Number

---

##### `minInstancesInput`<sup>Optional</sup> <a name="minInstancesInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.minInstancesInput"></a>

```java
public java.lang.Number getMinInstancesInput();
```

- *Type:* java.lang.Number

---

##### `minThroughputInput`<sup>Optional</sup> <a name="minThroughputInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.minThroughputInput"></a>

```java
public java.lang.Number getMinThroughputInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.subnetInput"></a>

```java
public VpcAccessConnectorSubnet getSubnetInput();
```

- *Type:* <a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.timeoutsInput"></a>

```java
public IResolvable|VpcAccessConnectorTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

---

##### `maxThroughput`<sup>Required</sup> <a name="maxThroughput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxThroughput"></a>

```java
public java.lang.Number getMaxThroughput();
```

- *Type:* java.lang.Number

---

##### `minInstances`<sup>Required</sup> <a name="minInstances" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

---

##### `minThroughput`<sup>Required</sup> <a name="minThroughput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.minThroughput"></a>

```java
public java.lang.Number getMinThroughput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpcAccessConnectorConfig <a name="VpcAccessConnectorConfig" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vpc_access_connector.VpcAccessConnectorConfig;

VpcAccessConnectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .ipCidrRange(java.lang.String)
//  .machineType(java.lang.String)
//  .maxInstances(java.lang.Number)
//  .maxThroughput(java.lang.Number)
//  .minInstances(java.lang.Number)
//  .minThroughput(java.lang.Number)
//  .network(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .subnet(VpcAccessConnectorSubnet)
//  .timeouts(VpcAccessConnectorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the resource (Max 25 characters). |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#id VpcAccessConnector#id}. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.machineType">machineType</a></code> | <code>java.lang.String</code> | Machine type of VM Instance underlying connector. Default is e2-micro. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | Maximum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.maxThroughput">maxThroughput</a></code> | <code>java.lang.Number</code> | Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | Minimum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.minThroughput">minThroughput</a></code> | <code>java.lang.Number</code> | Minimum throughput of the connector in Mbps. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.network">network</a></code> | <code>java.lang.String</code> | Name or self_link of the VPC network. Required if 'ip_cidr_range' is set. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#project VpcAccessConnector#project}. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where the VPC Access connector resides. If it is not provided, the provider region is used. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.subnet">subnet</a></code> | <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a></code> | subnet block. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the resource (Max 25 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#name VpcAccessConnector#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#id VpcAccessConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#ip_cidr_range VpcAccessConnector#ip_cidr_range}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

Machine type of VM Instance underlying connector. Default is e2-micro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#machine_type VpcAccessConnector#machine_type}

---

##### `maxInstances`<sup>Optional</sup> <a name="maxInstances" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

Maximum value of instances in autoscaling group underlying the connector.

Value must be between 3 and 10, inclusive. Must be
higher than the value specified by min_instances. Required alongside 'min_instances' if not using 'min_throughput'/'max_throughput'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#max_instances VpcAccessConnector#max_instances}

---

##### `maxThroughput`<sup>Optional</sup> <a name="maxThroughput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.maxThroughput"></a>

```java
public java.lang.Number getMaxThroughput();
```

- *Type:* java.lang.Number

Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'.

Default is 300. Refers to the expected throughput
when using an e2-micro machine type. Value must be a multiple of 100 from 300 through 1000. Must be higher than the value specified by
min_throughput. Only one of 'max_throughput' and 'max_instances' can be specified. The use of max_throughput is discouraged in favor of max_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#max_throughput VpcAccessConnector#max_throughput}

---

##### `minInstances`<sup>Optional</sup> <a name="minInstances" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

Minimum value of instances in autoscaling group underlying the connector.

Value must be between 2 and 9, inclusive. Must be
lower than the value specified by max_instances. Required alongside 'max_instances' if not using 'min_throughput'/'max_throughput'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#min_instances VpcAccessConnector#min_instances}

---

##### `minThroughput`<sup>Optional</sup> <a name="minThroughput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.minThroughput"></a>

```java
public java.lang.Number getMinThroughput();
```

- *Type:* java.lang.Number

Minimum throughput of the connector in Mbps.

Default and min is 200. Refers to the expected throughput when using an e2-micro machine type.
Value must be a multiple of 100 from 200 through 900. Must be lower than the value specified by max_throughput.
Only one of 'min_throughput' and 'min_instances' can be specified. The use of min_throughput is discouraged in favor of min_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#min_throughput VpcAccessConnector#min_throughput}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Name or self_link of the VPC network. Required if 'ip_cidr_range' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#network VpcAccessConnector#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#project VpcAccessConnector#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where the VPC Access connector resides. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#region VpcAccessConnector#region}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.subnet"></a>

```java
public VpcAccessConnectorSubnet getSubnet();
```

- *Type:* <a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#subnet VpcAccessConnector#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.timeouts"></a>

```java
public VpcAccessConnectorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#timeouts VpcAccessConnector#timeouts}

---

### VpcAccessConnectorSubnet <a name="VpcAccessConnectorSubnet" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.Initializer"></a>

```java
import io.cdktn.providers.google.vpc_access_connector.VpcAccessConnectorSubnet;

VpcAccessConnectorSubnet.builder()
//  .name(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.property.name">name</a></code> | <code>java.lang.String</code> | Subnet name (relative, not fully qualified). |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Project in which the subnet exists. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Subnet name (relative, not fully qualified).

E.g. if the full subnet selfLink is
https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#name VpcAccessConnector#name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Project in which the subnet exists.

If not set, this project is assumed to be the project for which the connector create request was issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#project_id VpcAccessConnector#project_id}

---

### VpcAccessConnectorTimeouts <a name="VpcAccessConnectorTimeouts" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.vpc_access_connector.VpcAccessConnectorTimeouts;

VpcAccessConnectorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#create VpcAccessConnector#create}. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#delete VpcAccessConnector#delete}. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#update VpcAccessConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#create VpcAccessConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#delete VpcAccessConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vpc_access_connector#update VpcAccessConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcAccessConnectorSubnetOutputReference <a name="VpcAccessConnectorSubnetOutputReference" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vpc_access_connector.VpcAccessConnectorSubnetOutputReference;

new VpcAccessConnectorSubnetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.internalValue"></a>

```java
public VpcAccessConnectorSubnet getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a>

---


### VpcAccessConnectorTimeoutsOutputReference <a name="VpcAccessConnectorTimeoutsOutputReference" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vpc_access_connector.VpcAccessConnectorTimeoutsOutputReference;

new VpcAccessConnectorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VpcAccessConnectorTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a>

---



