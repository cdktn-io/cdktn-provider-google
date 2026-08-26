# `apigeeDeveloperApp` Submodule <a name="`apigeeDeveloperApp` Submodule" id="@cdktn/provider-google.apigeeDeveloperApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeDeveloperApp <a name="ApigeeDeveloperApp" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app google_apigee_developer_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeDeveloperApp(Construct Scope, string Id, ApigeeDeveloperAppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig">ApigeeDeveloperAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig">ApigeeDeveloperAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetApiProducts">ResetApiProducts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetAppFamily">ResetAppFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetConsumerKey">ResetConsumerKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetConsumerSecret">ResetConsumerSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetKeyExpiresIn">ResetKeyExpiresIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putAttributes"></a>

```csharp
private void PutAttributes(IResolvable|ApigeeDeveloperAppAttributes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putTimeouts"></a>

```csharp
private void PutTimeouts(ApigeeDeveloperAppTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a>

---

##### `ResetApiProducts` <a name="ResetApiProducts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetApiProducts"></a>

```csharp
private void ResetApiProducts()
```

##### `ResetAppFamily` <a name="ResetAppFamily" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetAppFamily"></a>

```csharp
private void ResetAppFamily()
```

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetConsumerKey` <a name="ResetConsumerKey" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetConsumerKey"></a>

```csharp
private void ResetConsumerKey()
```

##### `ResetConsumerSecret` <a name="ResetConsumerSecret" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetConsumerSecret"></a>

```csharp
private void ResetConsumerSecret()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyExpiresIn` <a name="ResetKeyExpiresIn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetKeyExpiresIn"></a>

```csharp
private void ResetKeyExpiresIn()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeDeveloperApp resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApigeeDeveloperApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApigeeDeveloperApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApigeeDeveloperApp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApigeeDeveloperApp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApigeeDeveloperApp resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeDeveloperApp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeDeveloperApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeDeveloperApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList">ApigeeDeveloperAppAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList">ApigeeDeveloperAppCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerId">DeveloperId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.lastModifiedAt">LastModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference">ApigeeDeveloperAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.apiProductsInput">ApiProductsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appFamilyInput">AppFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.attributesInput">AttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.callbackUrlInput">CallbackUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerKeyInput">ConsumerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerSecretInput">ConsumerSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerEmailInput">DeveloperEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.keyExpiresInInput">KeyExpiresInInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.apiProducts">ApiProducts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appFamily">AppFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.callbackUrl">CallbackUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerEmail">DeveloperEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.keyExpiresIn">KeyExpiresIn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.attributes"></a>

```csharp
public ApigeeDeveloperAppAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList">ApigeeDeveloperAppAttributesList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.credentials"></a>

```csharp
public ApigeeDeveloperAppCredentialsList Credentials { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList">ApigeeDeveloperAppCredentialsList</a>

---

##### `DeveloperId`<sup>Required</sup> <a name="DeveloperId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerId"></a>

```csharp
public string DeveloperId { get; }
```

- *Type:* string

---

##### `LastModifiedAt`<sup>Required</sup> <a name="LastModifiedAt" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.lastModifiedAt"></a>

```csharp
public string LastModifiedAt { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.timeouts"></a>

```csharp
public ApigeeDeveloperAppTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference">ApigeeDeveloperAppTimeoutsOutputReference</a>

---

##### `ApiProductsInput`<sup>Optional</sup> <a name="ApiProductsInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.apiProductsInput"></a>

```csharp
public string[] ApiProductsInput { get; }
```

- *Type:* string[]

---

##### `AppFamilyInput`<sup>Optional</sup> <a name="AppFamilyInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appFamilyInput"></a>

```csharp
public string AppFamilyInput { get; }
```

- *Type:* string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.attributesInput"></a>

```csharp
public IResolvable|ApigeeDeveloperAppAttributes[] AttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>[]

---

##### `CallbackUrlInput`<sup>Optional</sup> <a name="CallbackUrlInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.callbackUrlInput"></a>

```csharp
public string CallbackUrlInput { get; }
```

- *Type:* string

---

##### `ConsumerKeyInput`<sup>Optional</sup> <a name="ConsumerKeyInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerKeyInput"></a>

```csharp
public string ConsumerKeyInput { get; }
```

- *Type:* string

---

##### `ConsumerSecretInput`<sup>Optional</sup> <a name="ConsumerSecretInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerSecretInput"></a>

```csharp
public string ConsumerSecretInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DeveloperEmailInput`<sup>Optional</sup> <a name="DeveloperEmailInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerEmailInput"></a>

```csharp
public string DeveloperEmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyExpiresInInput`<sup>Optional</sup> <a name="KeyExpiresInInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.keyExpiresInInput"></a>

```csharp
public string KeyExpiresInInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.timeoutsInput"></a>

```csharp
public IResolvable|ApigeeDeveloperAppTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a>

---

##### `ApiProducts`<sup>Required</sup> <a name="ApiProducts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.apiProducts"></a>

```csharp
public string[] ApiProducts { get; }
```

- *Type:* string[]

---

##### `AppFamily`<sup>Required</sup> <a name="AppFamily" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appFamily"></a>

```csharp
public string AppFamily { get; }
```

- *Type:* string

---

##### `CallbackUrl`<sup>Required</sup> <a name="CallbackUrl" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.callbackUrl"></a>

```csharp
public string CallbackUrl { get; }
```

- *Type:* string

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; }
```

- *Type:* string

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DeveloperEmail`<sup>Required</sup> <a name="DeveloperEmail" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerEmail"></a>

```csharp
public string DeveloperEmail { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyExpiresIn`<sup>Required</sup> <a name="KeyExpiresIn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.keyExpiresIn"></a>

```csharp
public string KeyExpiresIn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeDeveloperAppAttributes <a name="ApigeeDeveloperAppAttributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeDeveloperAppAttributes {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes.property.name">Name</a></code> | <code>string</code> | Key of the attribute. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes.property.value">Value</a></code> | <code>string</code> | Value of the attribute. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#name ApigeeDeveloperApp#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#value ApigeeDeveloperApp#value}

---

### ApigeeDeveloperAppConfig <a name="ApigeeDeveloperAppConfig" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeDeveloperAppConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CallbackUrl,
    string DeveloperEmail,
    string Name,
    string OrgId,
    string[] ApiProducts = null,
    string AppFamily = null,
    IResolvable|ApigeeDeveloperAppAttributes[] Attributes = null,
    string ConsumerKey = null,
    string ConsumerSecret = null,
    string DeletionPolicy = null,
    string Id = null,
    string KeyExpiresIn = null,
    string[] Scopes = null,
    string Status = null,
    ApigeeDeveloperAppTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.callbackUrl">CallbackUrl</a></code> | <code>string</code> | Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.developerEmail">DeveloperEmail</a></code> | <code>string</code> | Email address of the developer. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.name">Name</a></code> | <code>string</code> | Name of the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.orgId">OrgId</a></code> | <code>string</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.apiProducts">ApiProducts</a></code> | <code>string[]</code> | List of API products associated with the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.appFamily">AppFamily</a></code> | <code>string</code> | Developer app family. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.attributes">Attributes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>[]</code> | attributes block. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | Optionally specify a static consumer key for the developer app's credential. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | Optionally specify a static consumer secret for the developer app's credential. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#id ApigeeDeveloperApp#id}. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.keyExpiresIn">KeyExpiresIn</a></code> | <code>string</code> | Expiration time, in milliseconds, for the consumer key that is generated for the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | Scopes to apply to the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.status">Status</a></code> | <code>string</code> | Status of the credential. Valid values include approved or revoked. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CallbackUrl`<sup>Required</sup> <a name="CallbackUrl" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.callbackUrl"></a>

```csharp
public string CallbackUrl { get; set; }
```

- *Type:* string

Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#callback_url ApigeeDeveloperApp#callback_url}

---

##### `DeveloperEmail`<sup>Required</sup> <a name="DeveloperEmail" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.developerEmail"></a>

```csharp
public string DeveloperEmail { get; set; }
```

- *Type:* string

Email address of the developer.

This value is used to uniquely identify the developer in Apigee hybrid.
Note that the email address has to be in lowercase only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#developer_email ApigeeDeveloperApp#developer_email}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#name ApigeeDeveloperApp#name}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#org_id ApigeeDeveloperApp#org_id}

---

##### `ApiProducts`<sup>Optional</sup> <a name="ApiProducts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.apiProducts"></a>

```csharp
public string[] ApiProducts { get; set; }
```

- *Type:* string[]

List of API products associated with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#api_products ApigeeDeveloperApp#api_products}

---

##### `AppFamily`<sup>Optional</sup> <a name="AppFamily" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.appFamily"></a>

```csharp
public string AppFamily { get; set; }
```

- *Type:* string

Developer app family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#app_family ApigeeDeveloperApp#app_family}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.attributes"></a>

```csharp
public IResolvable|ApigeeDeveloperAppAttributes[] Attributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>[]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#attributes ApigeeDeveloperApp#attributes}

---

##### `ConsumerKey`<sup>Optional</sup> <a name="ConsumerKey" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; set; }
```

- *Type:* string

Optionally specify a static consumer key for the developer app's credential.

If not set, the API auto-generates a key. The consumer key must be unique
across all developer apps in an organization. Changing this field forces the
resource to be recreated.

This is a write-only input used at create time: the provider creates the
credential with this key via the keys API and removes the auto-generated
one. The effective key is exposed in the 'credentials' output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#consumer_key ApigeeDeveloperApp#consumer_key}

---

##### `ConsumerSecret`<sup>Optional</sup> <a name="ConsumerSecret" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; set; }
```

- *Type:* string

Optionally specify a static consumer secret for the developer app's credential.

Required if 'consumer_key' is specified. If not set, the API
auto-generates a secret. Changing this field forces the resource to be
recreated.

This is a write-only input used at create time; the effective secret is
exposed in the 'credentials' output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#consumer_secret ApigeeDeveloperApp#consumer_secret}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#deletion_policy ApigeeDeveloperApp#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#id ApigeeDeveloperApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyExpiresIn`<sup>Optional</sup> <a name="KeyExpiresIn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.keyExpiresIn"></a>

```csharp
public string KeyExpiresIn { get; set; }
```

- *Type:* string

Expiration time, in milliseconds, for the consumer key that is generated for the developer app.

If not set or left to the default value of -1,
the API key never expires. The expiration time can't be updated after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#key_expires_in ApigeeDeveloperApp#key_expires_in}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Scopes to apply to the developer app.

The specified scopes must already exist for the API product that
you associate with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#scopes ApigeeDeveloperApp#scopes}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of the credential. Valid values include approved or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#status ApigeeDeveloperApp#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.timeouts"></a>

```csharp
public ApigeeDeveloperAppTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#timeouts ApigeeDeveloperApp#timeouts}

---

### ApigeeDeveloperAppCredentials <a name="ApigeeDeveloperAppCredentials" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeDeveloperAppCredentials {

};
```


### ApigeeDeveloperAppCredentialsApiProducts <a name="ApigeeDeveloperAppCredentialsApiProducts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProducts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProducts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeDeveloperAppCredentialsApiProducts {

};
```


### ApigeeDeveloperAppCredentialsAttributes <a name="ApigeeDeveloperAppCredentialsAttributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeDeveloperAppCredentialsAttributes {

};
```


### ApigeeDeveloperAppTimeouts <a name="ApigeeDeveloperAppTimeouts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeDeveloperAppTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#create ApigeeDeveloperApp#create}. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#delete ApigeeDeveloperApp#delete}. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#update ApigeeDeveloperApp#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#create ApigeeDeveloperApp#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#delete ApigeeDeveloperApp#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#update ApigeeDeveloperApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeDeveloperAppAttributesList <a name="ApigeeDeveloperAppAttributesList" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeDeveloperAppAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.get"></a>

```csharp
private ApigeeDeveloperAppAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.internalValue"></a>

```csharp
public IResolvable|ApigeeDeveloperAppAttributes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>[]

---


### ApigeeDeveloperAppAttributesOutputReference <a name="ApigeeDeveloperAppAttributesOutputReference" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeDeveloperAppAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigeeDeveloperAppAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>

---


### ApigeeDeveloperAppCredentialsApiProductsList <a name="ApigeeDeveloperAppCredentialsApiProductsList" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeDeveloperAppCredentialsApiProductsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.get"></a>

```csharp
private ApigeeDeveloperAppCredentialsApiProductsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApigeeDeveloperAppCredentialsApiProductsOutputReference <a name="ApigeeDeveloperAppCredentialsApiProductsOutputReference" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeDeveloperAppCredentialsApiProductsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.apiproduct">Apiproduct</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProducts">ApigeeDeveloperAppCredentialsApiProducts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Apiproduct`<sup>Required</sup> <a name="Apiproduct" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.apiproduct"></a>

```csharp
public string Apiproduct { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.internalValue"></a>

```csharp
public ApigeeDeveloperAppCredentialsApiProducts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProducts">ApigeeDeveloperAppCredentialsApiProducts</a>

---


### ApigeeDeveloperAppCredentialsAttributesList <a name="ApigeeDeveloperAppCredentialsAttributesList" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeDeveloperAppCredentialsAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.get"></a>

```csharp
private ApigeeDeveloperAppCredentialsAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApigeeDeveloperAppCredentialsAttributesOutputReference <a name="ApigeeDeveloperAppCredentialsAttributesOutputReference" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeDeveloperAppCredentialsAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributes">ApigeeDeveloperAppCredentialsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.internalValue"></a>

```csharp
public ApigeeDeveloperAppCredentialsAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributes">ApigeeDeveloperAppCredentialsAttributes</a>

---


### ApigeeDeveloperAppCredentialsList <a name="ApigeeDeveloperAppCredentialsList" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeDeveloperAppCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.get"></a>

```csharp
private ApigeeDeveloperAppCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApigeeDeveloperAppCredentialsOutputReference <a name="ApigeeDeveloperAppCredentialsOutputReference" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeDeveloperAppCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.apiProducts">ApiProducts</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList">ApigeeDeveloperAppCredentialsApiProductsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList">ApigeeDeveloperAppCredentialsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.issuedAt">IssuedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentials">ApigeeDeveloperAppCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiProducts`<sup>Required</sup> <a name="ApiProducts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.apiProducts"></a>

```csharp
public ApigeeDeveloperAppCredentialsApiProductsList ApiProducts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList">ApigeeDeveloperAppCredentialsApiProductsList</a>

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.attributes"></a>

```csharp
public ApigeeDeveloperAppCredentialsAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList">ApigeeDeveloperAppCredentialsAttributesList</a>

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; }
```

- *Type:* string

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `IssuedAt`<sup>Required</sup> <a name="IssuedAt" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.issuedAt"></a>

```csharp
public string IssuedAt { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.internalValue"></a>

```csharp
public ApigeeDeveloperAppCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentials">ApigeeDeveloperAppCredentials</a>

---


### ApigeeDeveloperAppTimeoutsOutputReference <a name="ApigeeDeveloperAppTimeoutsOutputReference" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeDeveloperAppTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigeeDeveloperAppTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a>

---



