# `dataGoogleBeyondcorpSecurityGateway` Submodule <a name="`dataGoogleBeyondcorpSecurityGateway` Submodule" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBeyondcorpSecurityGateway <a name="DataGoogleBeyondcorpSecurityGateway" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/beyondcorp_security_gateway google_beyondcorp_security_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway(scope: Construct, id: string, config: DataGoogleBeyondcorpSecurityGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig">DataGoogleBeyondcorpSecurityGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig">DataGoogleBeyondcorpSecurityGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBeyondcorpSecurityGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isConstruct"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformElement"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformDataSource"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleBeyondcorpSecurityGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBeyondcorpSecurityGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBeyondcorpSecurityGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/beyondcorp_security_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBeyondcorpSecurityGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.delegatingServiceAccount">delegatingServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.externalIps">externalIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.hubs">hubs</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList">DataGoogleBeyondcorpSecurityGatewayHubsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList">DataGoogleBeyondcorpSecurityGatewayLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.proxyProtocolConfig">proxyProtocolConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.serviceDiscovery">serviceDiscovery</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.securityGatewayIdInput">securityGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.securityGatewayId">securityGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `delegatingServiceAccount`<sup>Required</sup> <a name="delegatingServiceAccount" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.delegatingServiceAccount"></a>

```typescript
public readonly delegatingServiceAccount: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalIps`<sup>Required</sup> <a name="externalIps" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.externalIps"></a>

```typescript
public readonly externalIps: string[];
```

- *Type:* string[]

---

##### `hubs`<sup>Required</sup> <a name="hubs" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.hubs"></a>

```typescript
public readonly hubs: DataGoogleBeyondcorpSecurityGatewayHubsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList">DataGoogleBeyondcorpSecurityGatewayHubsList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.logging"></a>

```typescript
public readonly logging: DataGoogleBeyondcorpSecurityGatewayLoggingList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList">DataGoogleBeyondcorpSecurityGatewayLoggingList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `proxyProtocolConfig`<sup>Required</sup> <a name="proxyProtocolConfig" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.proxyProtocolConfig"></a>

```typescript
public readonly proxyProtocolConfig: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList</a>

---

##### `serviceDiscovery`<sup>Required</sup> <a name="serviceDiscovery" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.serviceDiscovery"></a>

```typescript
public readonly serviceDiscovery: DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `securityGatewayIdInput`<sup>Optional</sup> <a name="securityGatewayIdInput" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.securityGatewayIdInput"></a>

```typescript
public readonly securityGatewayIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.securityGatewayId"></a>

```typescript
public readonly securityGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBeyondcorpSecurityGatewayConfig <a name="DataGoogleBeyondcorpSecurityGatewayConfig" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

const dataGoogleBeyondcorpSecurityGatewayConfig: dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.securityGatewayId">securityGatewayId</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/beyondcorp_security_gateway#id DataGoogleBeyondcorpSecurityGateway#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/beyondcorp_security_gateway#project DataGoogleBeyondcorpSecurityGateway#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.securityGatewayId"></a>

```typescript
public readonly securityGatewayId: string;
```

- *Type:* string

Optional.

User-settable SecurityGateway resource ID.
* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/beyondcorp_security_gateway#security_gateway_id DataGoogleBeyondcorpSecurityGateway#security_gateway_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/beyondcorp_security_gateway#id DataGoogleBeyondcorpSecurityGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/beyondcorp_security_gateway#project DataGoogleBeyondcorpSecurityGateway#project}.

---

### DataGoogleBeyondcorpSecurityGatewayHubs <a name="DataGoogleBeyondcorpSecurityGatewayHubs" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubs.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

const dataGoogleBeyondcorpSecurityGatewayHubs: dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubs = { ... }
```


### DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway <a name="DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

const dataGoogleBeyondcorpSecurityGatewayHubsInternetGateway: dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway = { ... }
```


### DataGoogleBeyondcorpSecurityGatewayLogging <a name="DataGoogleBeyondcorpSecurityGatewayLogging" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLogging.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

const dataGoogleBeyondcorpSecurityGatewayLogging: dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLogging = { ... }
```


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

const dataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig: dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig = { ... }
```


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

const dataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders: dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders = { ... }
```


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

const dataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo: dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo = { ... }
```


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

const dataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo: dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo = { ... }
```


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

const dataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo: dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo = { ... }
```


### DataGoogleBeyondcorpSecurityGatewayServiceDiscovery <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscovery" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscovery.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

const dataGoogleBeyondcorpSecurityGatewayServiceDiscovery: dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscovery = { ... }
```


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

const dataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway: dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway = { ... }
```


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

const dataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride: dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList <a name="DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.get"></a>

```typescript
public get(index: number): DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps">assignedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway">DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignedIps`<sup>Required</sup> <a name="assignedIps" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps"></a>

```typescript
public readonly assignedIps: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway">DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway</a>

---


### DataGoogleBeyondcorpSecurityGatewayHubsList <a name="DataGoogleBeyondcorpSecurityGatewayHubsList" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.get"></a>

```typescript
public get(index: number): DataGoogleBeyondcorpSecurityGatewayHubsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayHubsOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayHubsOutputReference" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway">internetGateway</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList">DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubs">DataGoogleBeyondcorpSecurityGatewayHubs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internetGateway`<sup>Required</sup> <a name="internetGateway" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway"></a>

```typescript
public readonly internetGateway: DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList">DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBeyondcorpSecurityGatewayHubs;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubs">DataGoogleBeyondcorpSecurityGatewayHubs</a>

---


### DataGoogleBeyondcorpSecurityGatewayLoggingList <a name="DataGoogleBeyondcorpSecurityGatewayLoggingList" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.get"></a>

```typescript
public get(index: number): DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLogging">DataGoogleBeyondcorpSecurityGatewayLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBeyondcorpSecurityGatewayLogging;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLogging">DataGoogleBeyondcorpSecurityGatewayLogging</a>

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.get"></a>

```typescript
public get(index: number): DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputType">outputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputType"></a>

```typescript
public readonly outputType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a>

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.get"></a>

```typescript
public get(index: number): DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputType">outputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputType"></a>

```typescript
public readonly outputType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a>

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.get"></a>

```typescript
public get(index: number): DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfo">deviceInfo</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfo">groupInfo</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputType">outputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfo">userInfo</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceInfo`<sup>Required</sup> <a name="deviceInfo" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfo"></a>

```typescript
public readonly deviceInfo: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList</a>

---

##### `groupInfo`<sup>Required</sup> <a name="groupInfo" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfo"></a>

```typescript
public readonly groupInfo: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList</a>

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputType"></a>

```typescript
public readonly outputType: string;
```

- *Type:* string

---

##### `userInfo`<sup>Required</sup> <a name="userInfo" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfo"></a>

```typescript
public readonly userInfo: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a>

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.get"></a>

```typescript
public get(index: number): DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputType">outputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputType"></a>

```typescript
public readonly outputType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a>

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.get"></a>

```typescript
public get(index: number): DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeaders">allowedClientHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIp">clientIp</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeaders">contextualHeaders</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentity">gatewayIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeaders">metadataHeaders</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedClientHeaders`<sup>Required</sup> <a name="allowedClientHeaders" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeaders"></a>

```typescript
public readonly allowedClientHeaders: string[];
```

- *Type:* string[]

---

##### `clientIp`<sup>Required</sup> <a name="clientIp" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIp"></a>

```typescript
public readonly clientIp: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `contextualHeaders`<sup>Required</sup> <a name="contextualHeaders" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeaders"></a>

```typescript
public readonly contextualHeaders: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList</a>

---

##### `gatewayIdentity`<sup>Required</sup> <a name="gatewayIdentity" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentity"></a>

```typescript
public readonly gatewayIdentity: string;
```

- *Type:* string

---

##### `metadataHeaders`<sup>Required</sup> <a name="metadataHeaders" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeaders"></a>

```typescript
public readonly metadataHeaders: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a>

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.get"></a>

```typescript
public get(index: number): DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverride">resourceOverride</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceOverride`<sup>Required</sup> <a name="resourceOverride" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverride"></a>

```typescript
public readonly resourceOverride: DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a>

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.get"></a>

```typescript
public get(index: number): DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a>

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.get"></a>

```typescript
public get(index: number): DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGateway } from '@cdktn/provider-google'

new dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGateway">apiGateway</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscovery">DataGoogleBeyondcorpSecurityGatewayServiceDiscovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiGateway`<sup>Required</sup> <a name="apiGateway" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGateway"></a>

```typescript
public readonly apiGateway: DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBeyondcorpSecurityGatewayServiceDiscovery;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscovery">DataGoogleBeyondcorpSecurityGatewayServiceDiscovery</a>

---



