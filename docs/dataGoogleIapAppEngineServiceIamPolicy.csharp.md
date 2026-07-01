# `dataGoogleIapAppEngineServiceIamPolicy` Submodule <a name="`dataGoogleIapAppEngineServiceIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIapAppEngineServiceIamPolicy <a name="DataGoogleIapAppEngineServiceIamPolicy" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/iap_app_engine_service_iam_policy google_iap_app_engine_service_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIapAppEngineServiceIamPolicy(Construct Scope, string Id, DataGoogleIapAppEngineServiceIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig">DataGoogleIapAppEngineServiceIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig">DataGoogleIapAppEngineServiceIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleIapAppEngineServiceIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIapAppEngineServiceIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIapAppEngineServiceIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIapAppEngineServiceIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIapAppEngineServiceIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleIapAppEngineServiceIamPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleIapAppEngineServiceIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleIapAppEngineServiceIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/iap_app_engine_service_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleIapAppEngineServiceIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIapAppEngineServiceIamPolicyConfig <a name="DataGoogleIapAppEngineServiceIamPolicyConfig" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIapAppEngineServiceIamPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AppId,
    string Service,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.appId">AppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/iap_app_engine_service_iam_policy#app_id DataGoogleIapAppEngineServiceIamPolicy#app_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.service">Service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/iap_app_engine_service_iam_policy#service DataGoogleIapAppEngineServiceIamPolicy#service}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/iap_app_engine_service_iam_policy#id DataGoogleIapAppEngineServiceIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/iap_app_engine_service_iam_policy#project DataGoogleIapAppEngineServiceIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/iap_app_engine_service_iam_policy#app_id DataGoogleIapAppEngineServiceIamPolicy#app_id}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/iap_app_engine_service_iam_policy#service DataGoogleIapAppEngineServiceIamPolicy#service}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/iap_app_engine_service_iam_policy#id DataGoogleIapAppEngineServiceIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleIapAppEngineServiceIamPolicy.DataGoogleIapAppEngineServiceIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/iap_app_engine_service_iam_policy#project DataGoogleIapAppEngineServiceIamPolicy#project}.

---



