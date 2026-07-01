# `dataGoogleStorageObjectSignedUrl` Submodule <a name="`dataGoogleStorageObjectSignedUrl` Submodule" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageObjectSignedUrl <a name="DataGoogleStorageObjectSignedUrl" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url google_storage_object_signed_url}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageObjectSignedUrl(Construct Scope, string Id, DataGoogleStorageObjectSignedUrlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig">DataGoogleStorageObjectSignedUrlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig">DataGoogleStorageObjectSignedUrlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetContentMd5">ResetContentMd5</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetExtensionHeaders">ResetExtensionHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetContentMd5` <a name="ResetContentMd5" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetContentMd5"></a>

```csharp
private void ResetContentMd5()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetExtensionHeaders` <a name="ResetExtensionHeaders" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetExtensionHeaders"></a>

```csharp
private void ResetExtensionHeaders()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleStorageObjectSignedUrl resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleStorageObjectSignedUrl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleStorageObjectSignedUrl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleStorageObjectSignedUrl.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleStorageObjectSignedUrl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleStorageObjectSignedUrl resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleStorageObjectSignedUrl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleStorageObjectSignedUrl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageObjectSignedUrl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.signedUrl">SignedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentMd5Input">ContentMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.credentialsInput">CredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.extensionHeadersInput">ExtensionHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentMd5">ContentMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.credentials">Credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.extensionHeaders">ExtensionHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.path">Path</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `SignedUrl`<sup>Required</sup> <a name="SignedUrl" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.signedUrl"></a>

```csharp
public string SignedUrl { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ContentMd5Input`<sup>Optional</sup> <a name="ContentMd5Input" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentMd5Input"></a>

```csharp
public string ContentMd5Input { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.credentialsInput"></a>

```csharp
public string CredentialsInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `ExtensionHeadersInput`<sup>Optional</sup> <a name="ExtensionHeadersInput" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.extensionHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtensionHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ContentMd5`<sup>Required</sup> <a name="ContentMd5" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentMd5"></a>

```csharp
public string ContentMd5 { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.credentials"></a>

```csharp
public string Credentials { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `ExtensionHeaders`<sup>Required</sup> <a name="ExtensionHeaders" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.extensionHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtensionHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageObjectSignedUrlConfig <a name="DataGoogleStorageObjectSignedUrlConfig" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageObjectSignedUrlConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Bucket,
    string Path,
    string ContentMd5 = null,
    string ContentType = null,
    string Credentials = null,
    string Duration = null,
    System.Collections.Generic.IDictionary<string, string> ExtensionHeaders = null,
    string HttpMethod = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#bucket DataGoogleStorageObjectSignedUrl#bucket}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#path DataGoogleStorageObjectSignedUrl#path}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.contentMd5">ContentMd5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#content_md5 DataGoogleStorageObjectSignedUrl#content_md5}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#content_type DataGoogleStorageObjectSignedUrl#content_type}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.credentials">Credentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#credentials DataGoogleStorageObjectSignedUrl#credentials}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#duration DataGoogleStorageObjectSignedUrl#duration}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.extensionHeaders">ExtensionHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#extension_headers DataGoogleStorageObjectSignedUrl#extension_headers}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.httpMethod">HttpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#http_method DataGoogleStorageObjectSignedUrl#http_method}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#id DataGoogleStorageObjectSignedUrl#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#bucket DataGoogleStorageObjectSignedUrl#bucket}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#path DataGoogleStorageObjectSignedUrl#path}.

---

##### `ContentMd5`<sup>Optional</sup> <a name="ContentMd5" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.contentMd5"></a>

```csharp
public string ContentMd5 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#content_md5 DataGoogleStorageObjectSignedUrl#content_md5}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#content_type DataGoogleStorageObjectSignedUrl#content_type}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.credentials"></a>

```csharp
public string Credentials { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#credentials DataGoogleStorageObjectSignedUrl#credentials}.

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#duration DataGoogleStorageObjectSignedUrl#duration}.

---

##### `ExtensionHeaders`<sup>Optional</sup> <a name="ExtensionHeaders" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.extensionHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtensionHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#extension_headers DataGoogleStorageObjectSignedUrl#extension_headers}.

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#http_method DataGoogleStorageObjectSignedUrl#http_method}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_object_signed_url#id DataGoogleStorageObjectSignedUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



