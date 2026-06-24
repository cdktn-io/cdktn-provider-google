# `apigeeEnvironmentApiRevisionDeployment` Submodule <a name="`apigeeEnvironmentApiRevisionDeployment` Submodule" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvironmentApiRevisionDeployment <a name="ApigeeEnvironmentApiRevisionDeployment" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment google_apigee_environment_api_revision_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_environment_api_revision_deployment.ApigeeEnvironmentApiRevisionDeployment;

ApigeeEnvironmentApiRevisionDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .api(java.lang.String)
    .environment(java.lang.String)
    .orgId(java.lang.String)
    .revision(java.lang.Number)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .override(java.lang.Boolean|IResolvable)
//  .sequencedRollout(java.lang.Boolean|IResolvable)
//  .serviceAccount(java.lang.String)
//  .timeouts(ApigeeEnvironmentApiRevisionDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.api">api</a></code> | <code>java.lang.String</code> | Apigee API proxy name. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | Apigee environment name. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | Apigee organization ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.revision">revision</a></code> | <code>java.lang.Number</code> | API proxy revision number to deploy. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#id ApigeeEnvironmentApiRevisionDeployment#id}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.override">override</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, replaces other deployed revisions of this proxy in the environment. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.sequencedRollout">sequencedRollout</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, enables sequenced rollout for safe traffic switching. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Optional service account the deployed proxy runs as. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.api"></a>

- *Type:* java.lang.String

Apigee API proxy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#api ApigeeEnvironmentApiRevisionDeployment#api}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#environment ApigeeEnvironmentApiRevisionDeployment#environment}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

Apigee organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#org_id ApigeeEnvironmentApiRevisionDeployment#org_id}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.revision"></a>

- *Type:* java.lang.Number

API proxy revision number to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#revision ApigeeEnvironmentApiRevisionDeployment#revision}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#deletion_policy ApigeeEnvironmentApiRevisionDeployment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#id ApigeeEnvironmentApiRevisionDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.override"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, replaces other deployed revisions of this proxy in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#override ApigeeEnvironmentApiRevisionDeployment#override}

---

##### `sequencedRollout`<sup>Optional</sup> <a name="sequencedRollout" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.sequencedRollout"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, enables sequenced rollout for safe traffic switching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#sequenced_rollout ApigeeEnvironmentApiRevisionDeployment#sequenced_rollout}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

Optional service account the deployed proxy runs as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#service_account ApigeeEnvironmentApiRevisionDeployment#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#timeouts ApigeeEnvironmentApiRevisionDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverride">resetOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetSequencedRollout">resetSequencedRollout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.putTimeouts"></a>

```java
public void putTimeouts(ApigeeEnvironmentApiRevisionDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetOverride` <a name="resetOverride" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverride"></a>

```java
public void resetOverride()
```

##### `resetSequencedRollout` <a name="resetSequencedRollout" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetSequencedRollout"></a>

```java
public void resetSequencedRollout()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeEnvironmentApiRevisionDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isConstruct"></a>

```java
import io.cdktn.providers.google.apigee_environment_api_revision_deployment.ApigeeEnvironmentApiRevisionDeployment;

ApigeeEnvironmentApiRevisionDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.google.apigee_environment_api_revision_deployment.ApigeeEnvironmentApiRevisionDeployment;

ApigeeEnvironmentApiRevisionDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.google.apigee_environment_api_revision_deployment.ApigeeEnvironmentApiRevisionDeployment;

ApigeeEnvironmentApiRevisionDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.apigee_environment_api_revision_deployment.ApigeeEnvironmentApiRevisionDeployment;

ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApigeeEnvironmentApiRevisionDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigeeEnvironmentApiRevisionDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigeeEnvironmentApiRevisionDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeEnvironmentApiRevisionDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.basepaths">basepaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deployStartTime">deployStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference">ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.apiInput">apiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.overrideInput">overrideInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revisionInput">revisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRolloutInput">sequencedRolloutInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.api">api</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.override">override</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revision">revision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRollout">sequencedRollout</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `basepaths`<sup>Required</sup> <a name="basepaths" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.basepaths"></a>

```java
public java.util.List<java.lang.String> getBasepaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deployStartTime`<sup>Required</sup> <a name="deployStartTime" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deployStartTime"></a>

```java
public java.lang.String getDeployStartTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeouts"></a>

```java
public ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference">ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference</a>

---

##### `apiInput`<sup>Optional</sup> <a name="apiInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.apiInput"></a>

```java
public java.lang.String getApiInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `overrideInput`<sup>Optional</sup> <a name="overrideInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.overrideInput"></a>

```java
public java.lang.Boolean|IResolvable getOverrideInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revisionInput"></a>

```java
public java.lang.Number getRevisionInput();
```

- *Type:* java.lang.Number

---

##### `sequencedRolloutInput`<sup>Optional</sup> <a name="sequencedRolloutInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRolloutInput"></a>

```java
public java.lang.Boolean|IResolvable getSequencedRolloutInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeoutsInput"></a>

```java
public IResolvable|ApigeeEnvironmentApiRevisionDeploymentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.override"></a>

```java
public java.lang.Boolean|IResolvable getOverride();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

---

##### `sequencedRollout`<sup>Required</sup> <a name="sequencedRollout" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRollout"></a>

```java
public java.lang.Boolean|IResolvable getSequencedRollout();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvironmentApiRevisionDeploymentConfig <a name="ApigeeEnvironmentApiRevisionDeploymentConfig" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_environment_api_revision_deployment.ApigeeEnvironmentApiRevisionDeploymentConfig;

ApigeeEnvironmentApiRevisionDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .api(java.lang.String)
    .environment(java.lang.String)
    .orgId(java.lang.String)
    .revision(java.lang.Number)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .override(java.lang.Boolean|IResolvable)
//  .sequencedRollout(java.lang.Boolean|IResolvable)
//  .serviceAccount(java.lang.String)
//  .timeouts(ApigeeEnvironmentApiRevisionDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.api">api</a></code> | <code>java.lang.String</code> | Apigee API proxy name. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | Apigee environment name. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | Apigee organization ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.revision">revision</a></code> | <code>java.lang.Number</code> | API proxy revision number to deploy. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#id ApigeeEnvironmentApiRevisionDeployment#id}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.override">override</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, replaces other deployed revisions of this proxy in the environment. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.sequencedRollout">sequencedRollout</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, enables sequenced rollout for safe traffic switching. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Optional service account the deployed proxy runs as. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

Apigee API proxy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#api ApigeeEnvironmentApiRevisionDeployment#api}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#environment ApigeeEnvironmentApiRevisionDeployment#environment}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

Apigee organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#org_id ApigeeEnvironmentApiRevisionDeployment#org_id}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

API proxy revision number to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#revision ApigeeEnvironmentApiRevisionDeployment#revision}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#deletion_policy ApigeeEnvironmentApiRevisionDeployment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#id ApigeeEnvironmentApiRevisionDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.override"></a>

```java
public java.lang.Boolean|IResolvable getOverride();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, replaces other deployed revisions of this proxy in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#override ApigeeEnvironmentApiRevisionDeployment#override}

---

##### `sequencedRollout`<sup>Optional</sup> <a name="sequencedRollout" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.sequencedRollout"></a>

```java
public java.lang.Boolean|IResolvable getSequencedRollout();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, enables sequenced rollout for safe traffic switching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#sequenced_rollout ApigeeEnvironmentApiRevisionDeployment#sequenced_rollout}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Optional service account the deployed proxy runs as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#service_account ApigeeEnvironmentApiRevisionDeployment#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.timeouts"></a>

```java
public ApigeeEnvironmentApiRevisionDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#timeouts ApigeeEnvironmentApiRevisionDeployment#timeouts}

---

### ApigeeEnvironmentApiRevisionDeploymentTimeouts <a name="ApigeeEnvironmentApiRevisionDeploymentTimeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_environment_api_revision_deployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts;

ApigeeEnvironmentApiRevisionDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#create ApigeeEnvironmentApiRevisionDeployment#create}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#delete ApigeeEnvironmentApiRevisionDeployment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#create ApigeeEnvironmentApiRevisionDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_api_revision_deployment#delete ApigeeEnvironmentApiRevisionDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference <a name="ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_environment_api_revision_deployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference;

new ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigeeEnvironmentApiRevisionDeploymentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---



