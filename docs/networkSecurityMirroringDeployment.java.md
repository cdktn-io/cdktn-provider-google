# `networkSecurityMirroringDeployment` Submodule <a name="`networkSecurityMirroringDeployment` Submodule" id="@cdktn/provider-google.networkSecurityMirroringDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityMirroringDeployment <a name="NetworkSecurityMirroringDeployment" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment google_network_security_mirroring_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_mirroring_deployment.NetworkSecurityMirroringDeployment;

NetworkSecurityMirroringDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .forwardingRule(java.lang.String)
    .location(java.lang.String)
    .mirroringDeploymentGroup(java.lang.String)
    .mirroringDeploymentId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkSecurityMirroringDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.forwardingRule">forwardingRule</a></code> | <code>java.lang.String</code> | The regional forwarding rule that fronts the mirroring collectors, for example: 'projects/123456789/regions/us-central1/forwardingRules/my-rule'. See https://google.aip.dev/124. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The cloud location of the deployment, e.g. 'us-central1-a' or 'asia-south1-b'. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.mirroringDeploymentGroup">mirroringDeploymentGroup</a></code> | <code>java.lang.String</code> | The deployment group that this deployment is a part of, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.mirroringDeploymentId">mirroringDeploymentId</a></code> | <code>java.lang.String</code> | The ID to use for the new deployment, which will become the final component of the deployment's resource name. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User-provided description of the deployment. Used as additional context for the deployment. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#id NetworkSecurityMirroringDeployment#id}. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#project NetworkSecurityMirroringDeployment#project}. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts">NetworkSecurityMirroringDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.forwardingRule"></a>

- *Type:* java.lang.String

The regional forwarding rule that fronts the mirroring collectors, for example: 'projects/123456789/regions/us-central1/forwardingRules/my-rule'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#forwarding_rule NetworkSecurityMirroringDeployment#forwarding_rule}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The cloud location of the deployment, e.g. 'us-central1-a' or 'asia-south1-b'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#location NetworkSecurityMirroringDeployment#location}

---

##### `mirroringDeploymentGroup`<sup>Required</sup> <a name="mirroringDeploymentGroup" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.mirroringDeploymentGroup"></a>

- *Type:* java.lang.String

The deployment group that this deployment is a part of, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#mirroring_deployment_group NetworkSecurityMirroringDeployment#mirroring_deployment_group}

---

##### `mirroringDeploymentId`<sup>Required</sup> <a name="mirroringDeploymentId" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.mirroringDeploymentId"></a>

- *Type:* java.lang.String

The ID to use for the new deployment, which will become the final component of the deployment's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#mirroring_deployment_id NetworkSecurityMirroringDeployment#mirroring_deployment_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#deletion_policy NetworkSecurityMirroringDeployment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User-provided description of the deployment. Used as additional context for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#description NetworkSecurityMirroringDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#id NetworkSecurityMirroringDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#labels NetworkSecurityMirroringDeployment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#project NetworkSecurityMirroringDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts">NetworkSecurityMirroringDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#timeouts NetworkSecurityMirroringDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.putTimeouts"></a>

```java
public void putTimeouts(NetworkSecurityMirroringDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts">NetworkSecurityMirroringDeploymentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkSecurityMirroringDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isConstruct"></a>

```java
import io.cdktn.providers.google.network_security_mirroring_deployment.NetworkSecurityMirroringDeployment;

NetworkSecurityMirroringDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.google.network_security_mirroring_deployment.NetworkSecurityMirroringDeployment;

NetworkSecurityMirroringDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.google.network_security_mirroring_deployment.NetworkSecurityMirroringDeployment;

NetworkSecurityMirroringDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.network_security_mirroring_deployment.NetworkSecurityMirroringDeployment;

NetworkSecurityMirroringDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkSecurityMirroringDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkSecurityMirroringDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkSecurityMirroringDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkSecurityMirroringDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecurityMirroringDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.reconciling">reconciling</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference">NetworkSecurityMirroringDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.forwardingRuleInput">forwardingRuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.mirroringDeploymentGroupInput">mirroringDeploymentGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.mirroringDeploymentIdInput">mirroringDeploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts">NetworkSecurityMirroringDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.forwardingRule">forwardingRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.mirroringDeploymentGroup">mirroringDeploymentGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.mirroringDeploymentId">mirroringDeploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.timeouts"></a>

```java
public NetworkSecurityMirroringDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference">NetworkSecurityMirroringDeploymentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `forwardingRuleInput`<sup>Optional</sup> <a name="forwardingRuleInput" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.forwardingRuleInput"></a>

```java
public java.lang.String getForwardingRuleInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mirroringDeploymentGroupInput`<sup>Optional</sup> <a name="mirroringDeploymentGroupInput" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.mirroringDeploymentGroupInput"></a>

```java
public java.lang.String getMirroringDeploymentGroupInput();
```

- *Type:* java.lang.String

---

##### `mirroringDeploymentIdInput`<sup>Optional</sup> <a name="mirroringDeploymentIdInput" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.mirroringDeploymentIdInput"></a>

```java
public java.lang.String getMirroringDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.timeoutsInput"></a>

```java
public IResolvable|NetworkSecurityMirroringDeploymentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts">NetworkSecurityMirroringDeploymentTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.forwardingRule"></a>

```java
public java.lang.String getForwardingRule();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mirroringDeploymentGroup`<sup>Required</sup> <a name="mirroringDeploymentGroup" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.mirroringDeploymentGroup"></a>

```java
public java.lang.String getMirroringDeploymentGroup();
```

- *Type:* java.lang.String

---

##### `mirroringDeploymentId`<sup>Required</sup> <a name="mirroringDeploymentId" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.mirroringDeploymentId"></a>

```java
public java.lang.String getMirroringDeploymentId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityMirroringDeploymentConfig <a name="NetworkSecurityMirroringDeploymentConfig" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_mirroring_deployment.NetworkSecurityMirroringDeploymentConfig;

NetworkSecurityMirroringDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .forwardingRule(java.lang.String)
    .location(java.lang.String)
    .mirroringDeploymentGroup(java.lang.String)
    .mirroringDeploymentId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkSecurityMirroringDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.forwardingRule">forwardingRule</a></code> | <code>java.lang.String</code> | The regional forwarding rule that fronts the mirroring collectors, for example: 'projects/123456789/regions/us-central1/forwardingRules/my-rule'. See https://google.aip.dev/124. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.location">location</a></code> | <code>java.lang.String</code> | The cloud location of the deployment, e.g. 'us-central1-a' or 'asia-south1-b'. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.mirroringDeploymentGroup">mirroringDeploymentGroup</a></code> | <code>java.lang.String</code> | The deployment group that this deployment is a part of, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.mirroringDeploymentId">mirroringDeploymentId</a></code> | <code>java.lang.String</code> | The ID to use for the new deployment, which will become the final component of the deployment's resource name. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.description">description</a></code> | <code>java.lang.String</code> | User-provided description of the deployment. Used as additional context for the deployment. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#id NetworkSecurityMirroringDeployment#id}. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#project NetworkSecurityMirroringDeployment#project}. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts">NetworkSecurityMirroringDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.forwardingRule"></a>

```java
public java.lang.String getForwardingRule();
```

- *Type:* java.lang.String

The regional forwarding rule that fronts the mirroring collectors, for example: 'projects/123456789/regions/us-central1/forwardingRules/my-rule'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#forwarding_rule NetworkSecurityMirroringDeployment#forwarding_rule}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The cloud location of the deployment, e.g. 'us-central1-a' or 'asia-south1-b'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#location NetworkSecurityMirroringDeployment#location}

---

##### `mirroringDeploymentGroup`<sup>Required</sup> <a name="mirroringDeploymentGroup" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.mirroringDeploymentGroup"></a>

```java
public java.lang.String getMirroringDeploymentGroup();
```

- *Type:* java.lang.String

The deployment group that this deployment is a part of, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#mirroring_deployment_group NetworkSecurityMirroringDeployment#mirroring_deployment_group}

---

##### `mirroringDeploymentId`<sup>Required</sup> <a name="mirroringDeploymentId" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.mirroringDeploymentId"></a>

```java
public java.lang.String getMirroringDeploymentId();
```

- *Type:* java.lang.String

The ID to use for the new deployment, which will become the final component of the deployment's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#mirroring_deployment_id NetworkSecurityMirroringDeployment#mirroring_deployment_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#deletion_policy NetworkSecurityMirroringDeployment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User-provided description of the deployment. Used as additional context for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#description NetworkSecurityMirroringDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#id NetworkSecurityMirroringDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#labels NetworkSecurityMirroringDeployment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#project NetworkSecurityMirroringDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.timeouts"></a>

```java
public NetworkSecurityMirroringDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts">NetworkSecurityMirroringDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#timeouts NetworkSecurityMirroringDeployment#timeouts}

---

### NetworkSecurityMirroringDeploymentTimeouts <a name="NetworkSecurityMirroringDeploymentTimeouts" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_mirroring_deployment.NetworkSecurityMirroringDeploymentTimeouts;

NetworkSecurityMirroringDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#create NetworkSecurityMirroringDeployment#create}. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#delete NetworkSecurityMirroringDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#update NetworkSecurityMirroringDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#create NetworkSecurityMirroringDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#delete NetworkSecurityMirroringDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_security_mirroring_deployment#update NetworkSecurityMirroringDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityMirroringDeploymentTimeoutsOutputReference <a name="NetworkSecurityMirroringDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_mirroring_deployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference;

new NetworkSecurityMirroringDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts">NetworkSecurityMirroringDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkSecurityMirroringDeploymentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts">NetworkSecurityMirroringDeploymentTimeouts</a>

---



