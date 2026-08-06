# `networkSecurityUllMirroringCollector` Submodule <a name="`networkSecurityUllMirroringCollector` Submodule" id="@cdktn/provider-google.networkSecurityUllMirroringCollector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityUllMirroringCollector <a name="NetworkSecurityUllMirroringCollector" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector google_network_security_ull_mirroring_collector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_ull_mirroring_collector.NetworkSecurityUllMirroringCollector;

NetworkSecurityUllMirroringCollector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engine(java.lang.String)
    .forwardingRule(java.lang.String)
    .location(java.lang.String)
    .ullMirroringCollectorId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkSecurityUllMirroringCollectorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | The engine resource to which this collector points to, for example: 'projects/123456789/locations/us-south1-d/ullMirroringEngines/my-engine'. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.forwardingRule">forwardingRule</a></code> | <code>java.lang.String</code> | The regional load balancer which the mirrored traffic should be forwarded to, for example: 'projects/123456789/regions/us-south1/forwardingRules/my-fr'. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The cloud location of the collector, e.g. 'us-south1-d' or 'us-south1-e'. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.ullMirroringCollectorId">ullMirroringCollectorId</a></code> | <code>java.lang.String</code> | The ID to use for the new collector, which will become the final component of the collector's resource name. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#id NetworkSecurityUllMirroringCollector#id}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#project NetworkSecurityUllMirroringCollector#project}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeouts">NetworkSecurityUllMirroringCollectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

The engine resource to which this collector points to, for example: 'projects/123456789/locations/us-south1-d/ullMirroringEngines/my-engine'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#engine NetworkSecurityUllMirroringCollector#engine}

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.forwardingRule"></a>

- *Type:* java.lang.String

The regional load balancer which the mirrored traffic should be forwarded to, for example: 'projects/123456789/regions/us-south1/forwardingRules/my-fr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#forwarding_rule NetworkSecurityUllMirroringCollector#forwarding_rule}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The cloud location of the collector, e.g. 'us-south1-d' or 'us-south1-e'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#location NetworkSecurityUllMirroringCollector#location}

---

##### `ullMirroringCollectorId`<sup>Required</sup> <a name="ullMirroringCollectorId" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.ullMirroringCollectorId"></a>

- *Type:* java.lang.String

The ID to use for the new collector, which will become the final component of the collector's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#ull_mirroring_collector_id NetworkSecurityUllMirroringCollector#ull_mirroring_collector_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#deletion_policy NetworkSecurityUllMirroringCollector#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#id NetworkSecurityUllMirroringCollector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#labels NetworkSecurityUllMirroringCollector#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#project NetworkSecurityUllMirroringCollector#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeouts">NetworkSecurityUllMirroringCollectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#timeouts NetworkSecurityUllMirroringCollector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.putTimeouts"></a>

```java
public void putTimeouts(NetworkSecurityUllMirroringCollectorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeouts">NetworkSecurityUllMirroringCollectorTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkSecurityUllMirroringCollector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.isConstruct"></a>

```java
import io.cdktn.providers.google.network_security_ull_mirroring_collector.NetworkSecurityUllMirroringCollector;

NetworkSecurityUllMirroringCollector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.isTerraformElement"></a>

```java
import io.cdktn.providers.google.network_security_ull_mirroring_collector.NetworkSecurityUllMirroringCollector;

NetworkSecurityUllMirroringCollector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.isTerraformResource"></a>

```java
import io.cdktn.providers.google.network_security_ull_mirroring_collector.NetworkSecurityUllMirroringCollector;

NetworkSecurityUllMirroringCollector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.network_security_ull_mirroring_collector.NetworkSecurityUllMirroringCollector;

NetworkSecurityUllMirroringCollector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkSecurityUllMirroringCollector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkSecurityUllMirroringCollector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkSecurityUllMirroringCollector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkSecurityUllMirroringCollector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecurityUllMirroringCollector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.reconciling">reconciling</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference">NetworkSecurityUllMirroringCollectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.forwardingRuleInput">forwardingRuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeouts">NetworkSecurityUllMirroringCollectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.ullMirroringCollectorIdInput">ullMirroringCollectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.forwardingRule">forwardingRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.ullMirroringCollectorId">ullMirroringCollectorId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.timeouts"></a>

```java
public NetworkSecurityUllMirroringCollectorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference">NetworkSecurityUllMirroringCollectorTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `forwardingRuleInput`<sup>Optional</sup> <a name="forwardingRuleInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.forwardingRuleInput"></a>

```java
public java.lang.String getForwardingRuleInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.timeoutsInput"></a>

```java
public IResolvable|NetworkSecurityUllMirroringCollectorTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeouts">NetworkSecurityUllMirroringCollectorTimeouts</a>

---

##### `ullMirroringCollectorIdInput`<sup>Optional</sup> <a name="ullMirroringCollectorIdInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.ullMirroringCollectorIdInput"></a>

```java
public java.lang.String getUllMirroringCollectorIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.forwardingRule"></a>

```java
public java.lang.String getForwardingRule();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `ullMirroringCollectorId`<sup>Required</sup> <a name="ullMirroringCollectorId" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.ullMirroringCollectorId"></a>

```java
public java.lang.String getUllMirroringCollectorId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityUllMirroringCollectorConfig <a name="NetworkSecurityUllMirroringCollectorConfig" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_ull_mirroring_collector.NetworkSecurityUllMirroringCollectorConfig;

NetworkSecurityUllMirroringCollectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engine(java.lang.String)
    .forwardingRule(java.lang.String)
    .location(java.lang.String)
    .ullMirroringCollectorId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkSecurityUllMirroringCollectorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | The engine resource to which this collector points to, for example: 'projects/123456789/locations/us-south1-d/ullMirroringEngines/my-engine'. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.forwardingRule">forwardingRule</a></code> | <code>java.lang.String</code> | The regional load balancer which the mirrored traffic should be forwarded to, for example: 'projects/123456789/regions/us-south1/forwardingRules/my-fr'. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.location">location</a></code> | <code>java.lang.String</code> | The cloud location of the collector, e.g. 'us-south1-d' or 'us-south1-e'. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.ullMirroringCollectorId">ullMirroringCollectorId</a></code> | <code>java.lang.String</code> | The ID to use for the new collector, which will become the final component of the collector's resource name. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#id NetworkSecurityUllMirroringCollector#id}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#project NetworkSecurityUllMirroringCollector#project}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeouts">NetworkSecurityUllMirroringCollectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

The engine resource to which this collector points to, for example: 'projects/123456789/locations/us-south1-d/ullMirroringEngines/my-engine'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#engine NetworkSecurityUllMirroringCollector#engine}

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.forwardingRule"></a>

```java
public java.lang.String getForwardingRule();
```

- *Type:* java.lang.String

The regional load balancer which the mirrored traffic should be forwarded to, for example: 'projects/123456789/regions/us-south1/forwardingRules/my-fr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#forwarding_rule NetworkSecurityUllMirroringCollector#forwarding_rule}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The cloud location of the collector, e.g. 'us-south1-d' or 'us-south1-e'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#location NetworkSecurityUllMirroringCollector#location}

---

##### `ullMirroringCollectorId`<sup>Required</sup> <a name="ullMirroringCollectorId" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.ullMirroringCollectorId"></a>

```java
public java.lang.String getUllMirroringCollectorId();
```

- *Type:* java.lang.String

The ID to use for the new collector, which will become the final component of the collector's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#ull_mirroring_collector_id NetworkSecurityUllMirroringCollector#ull_mirroring_collector_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#deletion_policy NetworkSecurityUllMirroringCollector#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#id NetworkSecurityUllMirroringCollector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#labels NetworkSecurityUllMirroringCollector#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#project NetworkSecurityUllMirroringCollector#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorConfig.property.timeouts"></a>

```java
public NetworkSecurityUllMirroringCollectorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeouts">NetworkSecurityUllMirroringCollectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#timeouts NetworkSecurityUllMirroringCollector#timeouts}

---

### NetworkSecurityUllMirroringCollectorTimeouts <a name="NetworkSecurityUllMirroringCollectorTimeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_ull_mirroring_collector.NetworkSecurityUllMirroringCollectorTimeouts;

NetworkSecurityUllMirroringCollectorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#create NetworkSecurityUllMirroringCollector#create}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#delete NetworkSecurityUllMirroringCollector#delete}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#update NetworkSecurityUllMirroringCollector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#create NetworkSecurityUllMirroringCollector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#delete NetworkSecurityUllMirroringCollector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_security_ull_mirroring_collector#update NetworkSecurityUllMirroringCollector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityUllMirroringCollectorTimeoutsOutputReference <a name="NetworkSecurityUllMirroringCollectorTimeoutsOutputReference" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_ull_mirroring_collector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference;

new NetworkSecurityUllMirroringCollectorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeouts">NetworkSecurityUllMirroringCollectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkSecurityUllMirroringCollectorTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkSecurityUllMirroringCollector.NetworkSecurityUllMirroringCollectorTimeouts">NetworkSecurityUllMirroringCollectorTimeouts</a>

---



