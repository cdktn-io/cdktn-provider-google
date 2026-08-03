# `dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy` Submodule <a name="`dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy <a name="DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy google_beyondcorp_security_gateway_application_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_beyondcorp_security_gateway_application_iam_policy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy;

DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .securityGatewayId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#application_id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#application_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#security_gateway_id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#security_gateway_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#project DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#application_id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#application_id}.

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.securityGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#security_gateway_id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#security_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#project DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_beyondcorp_security_gateway_application_iam_policy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy;

DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_beyondcorp_security_gateway_application_iam_policy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy;

DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_beyondcorp_security_gateway_application_iam_policy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy;

DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_beyondcorp_security_gateway_application_iam_policy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy;

DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.policyData">policyData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.securityGatewayIdInput">securityGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.policyData"></a>

```java
public java.lang.String getPolicyData();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `securityGatewayIdInput`<sup>Optional</sup> <a name="securityGatewayIdInput" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.securityGatewayIdInput"></a>

```java
public java.lang.String getSecurityGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.securityGatewayId"></a>

```java
public java.lang.String getSecurityGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig <a name="DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_beyondcorp_security_gateway_application_iam_policy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig;

DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .securityGatewayId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#application_id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#application_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#security_gateway_id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#security_gateway_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#project DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#application_id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#application_id}.

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.securityGatewayId"></a>

```java
public java.lang.String getSecurityGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#security_gateway_id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#security_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#project DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#project}.

---



