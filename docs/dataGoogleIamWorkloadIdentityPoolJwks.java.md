# `dataGoogleIamWorkloadIdentityPoolJwks` Submodule <a name="`dataGoogleIamWorkloadIdentityPoolJwks` Submodule" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamWorkloadIdentityPoolJwks <a name="DataGoogleIamWorkloadIdentityPoolJwks" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks google_iam_workload_identity_pool_jwks}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_iam_workload_identity_pool_jwks.DataGoogleIamWorkloadIdentityPoolJwks;

DataGoogleIamWorkloadIdentityPoolJwks.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataGoogleIamWorkloadIdentityPoolJwksTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.resourceName">resourceName</a></code> | <code>java.lang.String</code> | The JWKS URI to retrieve the public keys from (e.g. from google_iam_workload_identity_pool_openid_config.jwks_uri). |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#id DataGoogleIamWorkloadIdentityPoolJwks#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.resourceName"></a>

- *Type:* java.lang.String

The JWKS URI to retrieve the public keys from (e.g. from google_iam_workload_identity_pool_openid_config.jwks_uri).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#resource_name DataGoogleIamWorkloadIdentityPoolJwks#resource_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#id DataGoogleIamWorkloadIdentityPoolJwks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#timeouts DataGoogleIamWorkloadIdentityPoolJwks#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.putTimeouts"></a>

```java
public void putTimeouts(DataGoogleIamWorkloadIdentityPoolJwksTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolJwks resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_iam_workload_identity_pool_jwks.DataGoogleIamWorkloadIdentityPoolJwks;

DataGoogleIamWorkloadIdentityPoolJwks.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_iam_workload_identity_pool_jwks.DataGoogleIamWorkloadIdentityPoolJwks;

DataGoogleIamWorkloadIdentityPoolJwks.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_iam_workload_identity_pool_jwks.DataGoogleIamWorkloadIdentityPoolJwks;

DataGoogleIamWorkloadIdentityPoolJwks.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_iam_workload_identity_pool_jwks.DataGoogleIamWorkloadIdentityPoolJwks;

DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolJwks resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPoolJwks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleIamWorkloadIdentityPoolJwks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPoolJwks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.jwksJson">jwksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.keys">keys</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList">DataGoogleIamWorkloadIdentityPoolJwksKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference">DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceNameInput">resourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `jwksJson`<sup>Required</sup> <a name="jwksJson" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.jwksJson"></a>

```java
public java.lang.String getJwksJson();
```

- *Type:* java.lang.String

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.keys"></a>

```java
public DataGoogleIamWorkloadIdentityPoolJwksKeysList getKeys();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList">DataGoogleIamWorkloadIdentityPoolJwksKeysList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeouts"></a>

```java
public DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference">DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceNameInput"></a>

```java
public java.lang.String getResourceNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeoutsInput"></a>

```java
public IResolvable|DataGoogleIamWorkloadIdentityPoolJwksTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamWorkloadIdentityPoolJwksConfig <a name="DataGoogleIamWorkloadIdentityPoolJwksConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_iam_workload_identity_pool_jwks.DataGoogleIamWorkloadIdentityPoolJwksConfig;

DataGoogleIamWorkloadIdentityPoolJwksConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataGoogleIamWorkloadIdentityPoolJwksTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | The JWKS URI to retrieve the public keys from (e.g. from google_iam_workload_identity_pool_openid_config.jwks_uri). |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#id DataGoogleIamWorkloadIdentityPoolJwks#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

The JWKS URI to retrieve the public keys from (e.g. from google_iam_workload_identity_pool_openid_config.jwks_uri).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#resource_name DataGoogleIamWorkloadIdentityPoolJwks#resource_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#id DataGoogleIamWorkloadIdentityPoolJwks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.timeouts"></a>

```java
public DataGoogleIamWorkloadIdentityPoolJwksTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#timeouts DataGoogleIamWorkloadIdentityPoolJwks#timeouts}

---

### DataGoogleIamWorkloadIdentityPoolJwksKeys <a name="DataGoogleIamWorkloadIdentityPoolJwksKeys" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_iam_workload_identity_pool_jwks.DataGoogleIamWorkloadIdentityPoolJwksKeys;

DataGoogleIamWorkloadIdentityPoolJwksKeys.builder()
    .build();
```


### DataGoogleIamWorkloadIdentityPoolJwksTimeouts <a name="DataGoogleIamWorkloadIdentityPoolJwksTimeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_iam_workload_identity_pool_jwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts;

DataGoogleIamWorkloadIdentityPoolJwksTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#read DataGoogleIamWorkloadIdentityPoolJwks#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#read DataGoogleIamWorkloadIdentityPoolJwks#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleIamWorkloadIdentityPoolJwksKeysList <a name="DataGoogleIamWorkloadIdentityPoolJwksKeysList" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_iam_workload_identity_pool_jwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList;

new DataGoogleIamWorkloadIdentityPoolJwksKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.get"></a>

```java
public DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference <a name="DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_iam_workload_identity_pool_jwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference;

new DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.alg">alg</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.e">e</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kid">kid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kty">kty</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.n">n</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.use">use</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys">DataGoogleIamWorkloadIdentityPoolJwksKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alg`<sup>Required</sup> <a name="alg" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.alg"></a>

```java
public java.lang.String getAlg();
```

- *Type:* java.lang.String

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.e"></a>

```java
public java.lang.String getE();
```

- *Type:* java.lang.String

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kid"></a>

```java
public java.lang.String getKid();
```

- *Type:* java.lang.String

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kty"></a>

```java
public java.lang.String getKty();
```

- *Type:* java.lang.String

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.n"></a>

```java
public java.lang.String getN();
```

- *Type:* java.lang.String

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.use"></a>

```java
public java.lang.String getUse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.internalValue"></a>

```java
public DataGoogleIamWorkloadIdentityPoolJwksKeys getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys">DataGoogleIamWorkloadIdentityPoolJwksKeys</a>

---


### DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference <a name="DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_iam_workload_identity_pool_jwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference;

new DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataGoogleIamWorkloadIdentityPoolJwksTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

---



