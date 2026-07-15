# `dataGoogleIapAgentRegistryEndpointIamPolicy` Submodule <a name="`dataGoogleIapAgentRegistryEndpointIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIapAgentRegistryEndpointIamPolicy <a name="DataGoogleIapAgentRegistryEndpointIamPolicy" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/iap_agent_registry_endpoint_iam_policy google_iap_agent_registry_endpoint_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIapAgentRegistryEndpointIamPolicy(Construct Scope, string Id, DataGoogleIapAgentRegistryEndpointIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig">DataGoogleIapAgentRegistryEndpointIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig">DataGoogleIapAgentRegistryEndpointIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleIapAgentRegistryEndpointIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIapAgentRegistryEndpointIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIapAgentRegistryEndpointIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIapAgentRegistryEndpointIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIapAgentRegistryEndpointIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleIapAgentRegistryEndpointIamPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleIapAgentRegistryEndpointIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleIapAgentRegistryEndpointIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/iap_agent_registry_endpoint_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleIapAgentRegistryEndpointIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.endpointIdInput">EndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.endpointIdInput"></a>

```csharp
public string EndpointIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIapAgentRegistryEndpointIamPolicyConfig <a name="DataGoogleIapAgentRegistryEndpointIamPolicyConfig" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIapAgentRegistryEndpointIamPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EndpointId,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.endpointId">EndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/iap_agent_registry_endpoint_iam_policy#endpoint_id DataGoogleIapAgentRegistryEndpointIamPolicy#endpoint_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/iap_agent_registry_endpoint_iam_policy#id DataGoogleIapAgentRegistryEndpointIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/iap_agent_registry_endpoint_iam_policy#location DataGoogleIapAgentRegistryEndpointIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/iap_agent_registry_endpoint_iam_policy#project DataGoogleIapAgentRegistryEndpointIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.endpointId"></a>

```csharp
public string EndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/iap_agent_registry_endpoint_iam_policy#endpoint_id DataGoogleIapAgentRegistryEndpointIamPolicy#endpoint_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/iap_agent_registry_endpoint_iam_policy#id DataGoogleIapAgentRegistryEndpointIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/iap_agent_registry_endpoint_iam_policy#location DataGoogleIapAgentRegistryEndpointIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleIapAgentRegistryEndpointIamPolicy.DataGoogleIapAgentRegistryEndpointIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/iap_agent_registry_endpoint_iam_policy#project DataGoogleIapAgentRegistryEndpointIamPolicy#project}.

---



