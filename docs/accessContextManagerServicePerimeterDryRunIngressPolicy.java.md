# `accessContextManagerServicePerimeterDryRunIngressPolicy` Submodule <a name="`accessContextManagerServicePerimeterDryRunIngressPolicy` Submodule" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerServicePerimeterDryRunIngressPolicy <a name="AccessContextManagerServicePerimeterDryRunIngressPolicy" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy google_access_context_manager_service_perimeter_dry_run_ingress_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicy;

AccessContextManagerServicePerimeterDryRunIngressPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .perimeter(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .ingressFrom(AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom)
//  .ingressTo(AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo)
//  .timeouts(AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts)
//  .title(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.perimeter">perimeter</a></code> | <code>java.lang.String</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#id AccessContextManagerServicePerimeterDryRunIngressPolicy#id}. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.ingressFrom">ingressFrom</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a></code> | ingress_from block. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.ingressTo">ingressTo</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a></code> | ingress_to block. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Human readable title. Must be unique within the perimeter. Does not affect behavior. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.perimeter"></a>

- *Type:* java.lang.String

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#perimeter AccessContextManagerServicePerimeterDryRunIngressPolicy#perimeter}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#deletion_policy AccessContextManagerServicePerimeterDryRunIngressPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#id AccessContextManagerServicePerimeterDryRunIngressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressFrom`<sup>Optional</sup> <a name="ingressFrom" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.ingressFrom"></a>

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a>

ingress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#ingress_from AccessContextManagerServicePerimeterDryRunIngressPolicy#ingress_from}

---

##### `ingressTo`<sup>Optional</sup> <a name="ingressTo" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.ingressTo"></a>

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a>

ingress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#ingress_to AccessContextManagerServicePerimeterDryRunIngressPolicy#ingress_to}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#timeouts AccessContextManagerServicePerimeterDryRunIngressPolicy#timeouts}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Human readable title. Must be unique within the perimeter. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#title AccessContextManagerServicePerimeterDryRunIngressPolicy#title}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressFrom">putIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressTo">putIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.resetIngressFrom">resetIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.resetIngressTo">resetIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIngressFrom` <a name="putIngressFrom" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressFrom"></a>

```java
public void putIngressFrom(AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a>

---

##### `putIngressTo` <a name="putIngressTo" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressTo"></a>

```java
public void putIngressTo(AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.putTimeouts"></a>

```java
public void putTimeouts(AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetIngressFrom` <a name="resetIngressFrom" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.resetIngressFrom"></a>

```java
public void resetIngressFrom()
```

##### `resetIngressTo` <a name="resetIngressTo" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.resetIngressTo"></a>

```java
public void resetIngressTo()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.resetTitle"></a>

```java
public void resetTitle()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AccessContextManagerServicePerimeterDryRunIngressPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicy;

AccessContextManagerServicePerimeterDryRunIngressPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicy;

AccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicy;

AccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicy;

AccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AccessContextManagerServicePerimeterDryRunIngressPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AccessContextManagerServicePerimeterDryRunIngressPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AccessContextManagerServicePerimeterDryRunIngressPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AccessContextManagerServicePerimeterDryRunIngressPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.accessPolicyId">accessPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressFrom">ingressFrom</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressTo">ingressTo</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference">AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressFromInput">ingressFromInput</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressToInput">ingressToInput</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.perimeterInput">perimeterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.perimeter">perimeter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.accessPolicyId"></a>

```java
public java.lang.String getAccessPolicyId();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `ingressFrom`<sup>Required</sup> <a name="ingressFrom" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressFrom"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference getIngressFrom();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference</a>

---

##### `ingressTo`<sup>Required</sup> <a name="ingressTo" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressTo"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference getIngressTo();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.timeouts"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference">AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressFromInput`<sup>Optional</sup> <a name="ingressFromInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressFromInput"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom getIngressFromInput();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a>

---

##### `ingressToInput`<sup>Optional</sup> <a name="ingressToInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressToInput"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo getIngressToInput();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a>

---

##### `perimeterInput`<sup>Optional</sup> <a name="perimeterInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.perimeterInput"></a>

```java
public java.lang.String getPerimeterInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.timeoutsInput"></a>

```java
public IResolvable|AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.perimeter"></a>

```java
public java.lang.String getPerimeter();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerServicePerimeterDryRunIngressPolicyConfig <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyConfig" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig;

AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .perimeter(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .ingressFrom(AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom)
//  .ingressTo(AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo)
//  .timeouts(AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.perimeter">perimeter</a></code> | <code>java.lang.String</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#id AccessContextManagerServicePerimeterDryRunIngressPolicy#id}. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.ingressFrom">ingressFrom</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a></code> | ingress_from block. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.ingressTo">ingressTo</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a></code> | ingress_to block. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.title">title</a></code> | <code>java.lang.String</code> | Human readable title. Must be unique within the perimeter. Does not affect behavior. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.perimeter"></a>

```java
public java.lang.String getPerimeter();
```

- *Type:* java.lang.String

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#perimeter AccessContextManagerServicePerimeterDryRunIngressPolicy#perimeter}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#deletion_policy AccessContextManagerServicePerimeterDryRunIngressPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#id AccessContextManagerServicePerimeterDryRunIngressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressFrom`<sup>Optional</sup> <a name="ingressFrom" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.ingressFrom"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom getIngressFrom();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a>

ingress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#ingress_from AccessContextManagerServicePerimeterDryRunIngressPolicy#ingress_from}

---

##### `ingressTo`<sup>Optional</sup> <a name="ingressTo" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.ingressTo"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo getIngressTo();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a>

ingress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#ingress_to AccessContextManagerServicePerimeterDryRunIngressPolicy#ingress_to}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.timeouts"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#timeouts AccessContextManagerServicePerimeterDryRunIngressPolicy#timeouts}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Human readable title. Must be unique within the perimeter. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#title AccessContextManagerServicePerimeterDryRunIngressPolicy#title}

---

### AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom;

AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.builder()
//  .identities(java.util.List<java.lang.String>)
//  .identityType(java.lang.String)
//  .sources(IResolvable|java.util.List<AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | Identities can be an individual user, service account, Google group, or third-party identity. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Specifies the type of identities that are allowed access from outside the perimeter. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.sources">sources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a>></code> | sources block. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

Identities can be an individual user, service account, Google group, or third-party identity.

For third-party identity, only single identities
are supported and other identity types are not supported.The v1 identities
that have the prefix user, group and serviceAccount in
https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#identities AccessContextManagerServicePerimeterDryRunIngressPolicy#identities}

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Specifies the type of identities that are allowed access from outside the perimeter.

If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#identity_type AccessContextManagerServicePerimeterDryRunIngressPolicy#identity_type}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.sources"></a>

```java
public IResolvable|java.util.List<AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources> getSources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a>>

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#sources AccessContextManagerServicePerimeterDryRunIngressPolicy#sources}

---

### AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources;

AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.builder()
//  .accessLevel(java.lang.String)
//  .pscEndpoint(AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint)
//  .resource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.property.pscEndpoint">pscEndpoint</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint</a></code> | psc_endpoint block. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.property.resource">resource</a></code> | <code>java.lang.String</code> | A Google Cloud resource that is allowed to ingress the perimeter. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet.

'AccessLevels' listed
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
resources within the perimeter can only be accessed via Google Cloud calls
with request origins within the perimeter.
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
If * is specified, then all IngressSources will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#access_level AccessContextManagerServicePerimeterDryRunIngressPolicy#access_level}

---

##### `pscEndpoint`<sup>Optional</sup> <a name="pscEndpoint" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.property.pscEndpoint"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint getPscEndpoint();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint</a>

psc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#psc_endpoint AccessContextManagerServicePerimeterDryRunIngressPolicy#psc_endpoint}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

A Google Cloud resource that is allowed to ingress the perimeter.

Requests from these resources will be allowed to access perimeter data.
Currently only projects are allowed. Format 'projects/{project_number}'
The project may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. '*' is not allowed, the case
of allowing all Google Cloud resources only is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#resource AccessContextManagerServicePerimeterDryRunIngressPolicy#resource}

---

### AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint;

AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint.builder()
//  .forwardingRule(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint.property.forwardingRule">forwardingRule</a></code> | <code>java.lang.String</code> | The full resource name of the global forwarding rule that identifies a Private Service Connect endpoint. Forwarding rule format: '//compute.googleapis.com/projects/{PROJECT_ID}/global/forwardingRules/{FORWARDING_RULE_ID}'. |

---

##### `forwardingRule`<sup>Optional</sup> <a name="forwardingRule" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint.property.forwardingRule"></a>

```java
public java.lang.String getForwardingRule();
```

- *Type:* java.lang.String

The full resource name of the global forwarding rule that identifies a Private Service Connect endpoint. Forwarding rule format: '//compute.googleapis.com/projects/{PROJECT_ID}/global/forwardingRules/{FORWARDING_RULE_ID}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#forwarding_rule AccessContextManagerServicePerimeterDryRunIngressPolicy#forwarding_rule}

---

### AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo;

AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.builder()
//  .operations(IResolvable|java.util.List<AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations>)
//  .resources(java.util.List<java.lang.String>)
//  .roles(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.property.operations">operations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a>></code> | operations block. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | A list of IAM roles that represent the set of operations that the sources specified in the corresponding 'IngressFrom' are allowed to perform. |

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.property.operations"></a>

```java
public IResolvable|java.util.List<AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations> getOperations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a>>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#operations AccessContextManagerServicePerimeterDryRunIngressPolicy#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'.

A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the 'operations' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#resources AccessContextManagerServicePerimeterDryRunIngressPolicy#resources}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

A list of IAM roles that represent the set of operations that the sources specified in the corresponding 'IngressFrom' are allowed to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#roles AccessContextManagerServicePerimeterDryRunIngressPolicy#roles}

---

### AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations;

AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations.builder()
//  .methodSelectors(IResolvable|java.util.List<AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors>)
//  .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations.property.methodSelectors">methodSelectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a>></code> | method_selectors block. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `methodSelectors`<sup>Optional</sup> <a name="methodSelectors" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations.property.methodSelectors"></a>

```java
public IResolvable|java.util.List<AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors> getMethodSelectors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a>>

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#method_selectors AccessContextManagerServicePerimeterDryRunIngressPolicy#method_selectors}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with 'serviceName'
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#service_name AccessContextManagerServicePerimeterDryRunIngressPolicy#service_name}

---

### AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors;

AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors.builder()
//  .method(java.lang.String)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors.property.method">method</a></code> | <code>java.lang.String</code> | Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>java.lang.String</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'.

If '*' used as value for 'method', then
ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#method AccessContextManagerServicePerimeterDryRunIngressPolicy#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#permission AccessContextManagerServicePerimeterDryRunIngressPolicy#permission}

---

### AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts;

AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#create AccessContextManagerServicePerimeterDryRunIngressPolicy#create}. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#delete AccessContextManagerServicePerimeterDryRunIngressPolicy#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#create AccessContextManagerServicePerimeterDryRunIngressPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#delete AccessContextManagerServicePerimeterDryRunIngressPolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference;

new AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetIdentities">resetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSources` <a name="putSources" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.putSources"></a>

```java
public void putSources(IResolvable|java.util.List<AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.putSources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a>>

---

##### `resetIdentities` <a name="resetIdentities" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetIdentities"></a>

```java
public void resetIdentities()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```

##### `resetSources` <a name="resetSources" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetSources"></a>

```java
public void resetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identitiesInput">identitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.sources"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList getSources();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList</a>

---

##### `identitiesInput`<sup>Optional</sup> <a name="identitiesInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identitiesInput"></a>

```java
public java.util.List<java.lang.String> getIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.sourcesInput"></a>

```java
public IResolvable|java.util.List<AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources> getSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a>>

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a>

---


### AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList;

new AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.get"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a>>

---


### AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference;

new AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.putPscEndpoint">putPscEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resetPscEndpoint">resetPscEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPscEndpoint` <a name="putPscEndpoint" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.putPscEndpoint"></a>

```java
public void putPscEndpoint(AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.putPscEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint</a>

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetPscEndpoint` <a name="resetPscEndpoint" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resetPscEndpoint"></a>

```java
public void resetPscEndpoint()
```

##### `resetResource` <a name="resetResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resetResource"></a>

```java
public void resetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.pscEndpoint">pscEndpoint</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.pscEndpointInput">pscEndpointInput</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pscEndpoint`<sup>Required</sup> <a name="pscEndpoint" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.pscEndpoint"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference getPscEndpoint();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `pscEndpointInput`<sup>Optional</sup> <a name="pscEndpointInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.pscEndpointInput"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint getPscEndpointInput();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint</a>

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a>

---


### AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference;

new AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.resetForwardingRule">resetForwardingRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForwardingRule` <a name="resetForwardingRule" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.resetForwardingRule"></a>

```java
public void resetForwardingRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.property.forwardingRuleInput">forwardingRuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.property.forwardingRule">forwardingRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forwardingRuleInput`<sup>Optional</sup> <a name="forwardingRuleInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.property.forwardingRuleInput"></a>

```java
public java.lang.String getForwardingRuleInput();
```

- *Type:* java.lang.String

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.property.forwardingRule"></a>

```java
public java.lang.String getForwardingRule();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpointOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesPscEndpoint</a>

---


### AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList;

new AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.get"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a>>

---


### AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList;

new AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.get"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a>>

---


### AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference;

new AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```java
public IResolvable|AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a>

---


### AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference;

new AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.putMethodSelectors">putMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resetMethodSelectors">resetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMethodSelectors` <a name="putMethodSelectors" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.putMethodSelectors"></a>

```java
public void putMethodSelectors(IResolvable|java.util.List<AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a>>

---

##### `resetMethodSelectors` <a name="resetMethodSelectors" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resetMethodSelectors"></a>

```java
public void resetMethodSelectors()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.methodSelectors">methodSelectors</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.methodSelectorsInput">methodSelectorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodSelectors`<sup>Required</sup> <a name="methodSelectors" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.methodSelectors"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList getMethodSelectors();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList</a>

---

##### `methodSelectorsInput`<sup>Optional</sup> <a name="methodSelectorsInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.methodSelectorsInput"></a>

```java
public IResolvable|java.util.List<AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors> getMethodSelectorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a>>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.internalValue"></a>

```java
public IResolvable|AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a>

---


### AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference;

new AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resetRoles">resetRoles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.putOperations"></a>

```java
public void putOperations(IResolvable|java.util.List<AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.putOperations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a>>

---

##### `resetOperations` <a name="resetOperations" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resetOperations"></a>

```java
public void resetOperations()
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetRoles` <a name="resetRoles" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resetRoles"></a>

```java
public void resetRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.operationsInput">operationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.rolesInput">rolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.operations"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList getOperations();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList</a>

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.operationsInput"></a>

```java
public IResolvable|java.util.List<AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations> getOperationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.rolesInput"></a>

```java
public java.util.List<java.lang.String> getRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a>

---


### AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference <a name="AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_dry_run_ingress_policy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference;

new AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunIngressPolicy.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a>

---



