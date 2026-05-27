# `dataGoogleEndpointsServiceConsumersIamPolicy` Submodule <a name="`dataGoogleEndpointsServiceConsumersIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleEndpointsServiceConsumersIamPolicy <a name="DataGoogleEndpointsServiceConsumersIamPolicy" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/endpoints_service_consumers_iam_policy google_endpoints_service_consumers_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_endpoints_service_consumers_iam_policy.DataGoogleEndpointsServiceConsumersIamPolicy;

DataGoogleEndpointsServiceConsumersIamPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .consumerProject(java.lang.String)
    .serviceName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.consumerProject">consumerProject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/endpoints_service_consumers_iam_policy#consumer_project DataGoogleEndpointsServiceConsumersIamPolicy#consumer_project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/endpoints_service_consumers_iam_policy#service_name DataGoogleEndpointsServiceConsumersIamPolicy#service_name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/endpoints_service_consumers_iam_policy#id DataGoogleEndpointsServiceConsumersIamPolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `consumerProject`<sup>Required</sup> <a name="consumerProject" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.consumerProject"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/endpoints_service_consumers_iam_policy#consumer_project DataGoogleEndpointsServiceConsumersIamPolicy#consumer_project}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/endpoints_service_consumers_iam_policy#service_name DataGoogleEndpointsServiceConsumersIamPolicy#service_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/endpoints_service_consumers_iam_policy#id DataGoogleEndpointsServiceConsumersIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleEndpointsServiceConsumersIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_endpoints_service_consumers_iam_policy.DataGoogleEndpointsServiceConsumersIamPolicy;

DataGoogleEndpointsServiceConsumersIamPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_endpoints_service_consumers_iam_policy.DataGoogleEndpointsServiceConsumersIamPolicy;

DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_endpoints_service_consumers_iam_policy.DataGoogleEndpointsServiceConsumersIamPolicy;

DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_endpoints_service_consumers_iam_policy.DataGoogleEndpointsServiceConsumersIamPolicy;

DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleEndpointsServiceConsumersIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleEndpointsServiceConsumersIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleEndpointsServiceConsumersIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/endpoints_service_consumers_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleEndpointsServiceConsumersIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.policyData">policyData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.consumerProjectInput">consumerProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.consumerProject">consumerProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.policyData"></a>

```java
public java.lang.String getPolicyData();
```

- *Type:* java.lang.String

---

##### `consumerProjectInput`<sup>Optional</sup> <a name="consumerProjectInput" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.consumerProjectInput"></a>

```java
public java.lang.String getConsumerProjectInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `consumerProject`<sup>Required</sup> <a name="consumerProject" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.consumerProject"></a>

```java
public java.lang.String getConsumerProject();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleEndpointsServiceConsumersIamPolicyConfig <a name="DataGoogleEndpointsServiceConsumersIamPolicyConfig" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_endpoints_service_consumers_iam_policy.DataGoogleEndpointsServiceConsumersIamPolicyConfig;

DataGoogleEndpointsServiceConsumersIamPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .consumerProject(java.lang.String)
    .serviceName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.consumerProject">consumerProject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/endpoints_service_consumers_iam_policy#consumer_project DataGoogleEndpointsServiceConsumersIamPolicy#consumer_project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/endpoints_service_consumers_iam_policy#service_name DataGoogleEndpointsServiceConsumersIamPolicy#service_name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/endpoints_service_consumers_iam_policy#id DataGoogleEndpointsServiceConsumersIamPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `consumerProject`<sup>Required</sup> <a name="consumerProject" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.consumerProject"></a>

```java
public java.lang.String getConsumerProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/endpoints_service_consumers_iam_policy#consumer_project DataGoogleEndpointsServiceConsumersIamPolicy#consumer_project}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/endpoints_service_consumers_iam_policy#service_name DataGoogleEndpointsServiceConsumersIamPolicy#service_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/endpoints_service_consumers_iam_policy#id DataGoogleEndpointsServiceConsumersIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



