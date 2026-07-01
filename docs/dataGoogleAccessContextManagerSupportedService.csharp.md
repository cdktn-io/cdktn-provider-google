# `dataGoogleAccessContextManagerSupportedService` Submodule <a name="`dataGoogleAccessContextManagerSupportedService` Submodule" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAccessContextManagerSupportedService <a name="DataGoogleAccessContextManagerSupportedService" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/access_context_manager_supported_service google_access_context_manager_supported_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAccessContextManagerSupportedService(Construct Scope, string Id, DataGoogleAccessContextManagerSupportedServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig">DataGoogleAccessContextManagerSupportedServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig">DataGoogleAccessContextManagerSupportedServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleAccessContextManagerSupportedService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleAccessContextManagerSupportedService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleAccessContextManagerSupportedService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleAccessContextManagerSupportedService.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleAccessContextManagerSupportedService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleAccessContextManagerSupportedService resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleAccessContextManagerSupportedService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleAccessContextManagerSupportedService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/access_context_manager_supported_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleAccessContextManagerSupportedService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.availableOnRestrictedVip">AvailableOnRestrictedVip</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.knownLimitations">KnownLimitations</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceSupportStage">ServiceSupportStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.supportedMethods">SupportedMethods</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList">DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.supportStage">SupportStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AvailableOnRestrictedVip`<sup>Required</sup> <a name="AvailableOnRestrictedVip" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.availableOnRestrictedVip"></a>

```csharp
public IResolvable AvailableOnRestrictedVip { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `KnownLimitations`<sup>Required</sup> <a name="KnownLimitations" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.knownLimitations"></a>

```csharp
public IResolvable KnownLimitations { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ServiceSupportStage`<sup>Required</sup> <a name="ServiceSupportStage" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceSupportStage"></a>

```csharp
public string ServiceSupportStage { get; }
```

- *Type:* string

---

##### `SupportedMethods`<sup>Required</sup> <a name="SupportedMethods" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.supportedMethods"></a>

```csharp
public DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList SupportedMethods { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList">DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList</a>

---

##### `SupportStage`<sup>Required</sup> <a name="SupportStage" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.supportStage"></a>

```csharp
public string SupportStage { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAccessContextManagerSupportedServiceConfig <a name="DataGoogleAccessContextManagerSupportedServiceConfig" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAccessContextManagerSupportedServiceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ServiceName,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | The name of the service to get information about. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/access_context_manager_supported_service#id DataGoogleAccessContextManagerSupportedService#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

The name of the service to get information about.

The names must be in the same format as used in defining a service perimeter, for example, `storage.googleapis.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/access_context_manager_supported_service#service_name DataGoogleAccessContextManagerSupportedService#service_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/access_context_manager_supported_service#id DataGoogleAccessContextManagerSupportedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleAccessContextManagerSupportedServiceSupportedMethods <a name="DataGoogleAccessContextManagerSupportedServiceSupportedMethods" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAccessContextManagerSupportedServiceSupportedMethods {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList <a name="DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.get"></a>

```csharp
private DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference <a name="DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods">DataGoogleAccessContextManagerSupportedServiceSupportedMethods</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAccessContextManagerSupportedServiceSupportedMethods InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods">DataGoogleAccessContextManagerSupportedServiceSupportedMethods</a>

---



