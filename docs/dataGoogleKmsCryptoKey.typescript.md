# `dataGoogleKmsCryptoKey` Submodule <a name="`dataGoogleKmsCryptoKey` Submodule" id="@cdktn/provider-google.dataGoogleKmsCryptoKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsCryptoKey <a name="DataGoogleKmsCryptoKey" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/kms_crypto_key google_kms_crypto_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer"></a>

```typescript
import { dataGoogleKmsCryptoKey } from '@cdktn/provider-google'

new dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey(scope: Construct, id: string, config: DataGoogleKmsCryptoKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig">DataGoogleKmsCryptoKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig">DataGoogleKmsCryptoKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleKmsCryptoKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isConstruct"></a>

```typescript
import { dataGoogleKmsCryptoKey } from '@cdktn/provider-google'

dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformElement"></a>

```typescript
import { dataGoogleKmsCryptoKey } from '@cdktn/provider-google'

dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformDataSource"></a>

```typescript
import { dataGoogleKmsCryptoKey } from '@cdktn/provider-google'

dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.generateConfigForImport"></a>

```typescript
import { dataGoogleKmsCryptoKey } from '@cdktn/provider-google'

dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleKmsCryptoKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleKmsCryptoKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleKmsCryptoKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/kms_crypto_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsCryptoKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.cryptoKeyBackend">cryptoKeyBackend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.destroyScheduledDuration">destroyScheduledDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.importOnly">importOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList">DataGoogleKmsCryptoKeyPrimaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.purpose">purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.rotationPeriod">rotationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.skipInitialVersionCreation">skipInitialVersionCreation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.versionTemplate">versionTemplate</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList">DataGoogleKmsCryptoKeyVersionTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.keyRingInput">keyRingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.keyRing">keyRing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `cryptoKeyBackend`<sup>Required</sup> <a name="cryptoKeyBackend" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.cryptoKeyBackend"></a>

```typescript
public readonly cryptoKeyBackend: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `destroyScheduledDuration`<sup>Required</sup> <a name="destroyScheduledDuration" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.destroyScheduledDuration"></a>

```typescript
public readonly destroyScheduledDuration: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `importOnly`<sup>Required</sup> <a name="importOnly" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.importOnly"></a>

```typescript
public readonly importOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.primary"></a>

```typescript
public readonly primary: DataGoogleKmsCryptoKeyPrimaryList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList">DataGoogleKmsCryptoKeyPrimaryList</a>

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: string;
```

- *Type:* string

---

##### `skipInitialVersionCreation`<sup>Required</sup> <a name="skipInitialVersionCreation" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.skipInitialVersionCreation"></a>

```typescript
public readonly skipInitialVersionCreation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `versionTemplate`<sup>Required</sup> <a name="versionTemplate" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.versionTemplate"></a>

```typescript
public readonly versionTemplate: DataGoogleKmsCryptoKeyVersionTemplateList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList">DataGoogleKmsCryptoKeyVersionTemplateList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyRingInput`<sup>Optional</sup> <a name="keyRingInput" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.keyRingInput"></a>

```typescript
public readonly keyRingInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.keyRing"></a>

```typescript
public readonly keyRing: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsCryptoKeyConfig <a name="DataGoogleKmsCryptoKeyConfig" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.Initializer"></a>

```typescript
import { dataGoogleKmsCryptoKey } from '@cdktn/provider-google'

const dataGoogleKmsCryptoKeyConfig: dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.keyRing">keyRing</a></code> | <code>string</code> | The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.name">name</a></code> | <code>string</code> | The resource name for the CryptoKey. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/kms_crypto_key#id DataGoogleKmsCryptoKey#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.keyRing"></a>

```typescript
public readonly keyRing: string;
```

- *Type:* string

The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/kms_crypto_key#key_ring DataGoogleKmsCryptoKey#key_ring}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name for the CryptoKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/kms_crypto_key#name DataGoogleKmsCryptoKey#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/kms_crypto_key#id DataGoogleKmsCryptoKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleKmsCryptoKeyPrimary <a name="DataGoogleKmsCryptoKeyPrimary" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimary.Initializer"></a>

```typescript
import { dataGoogleKmsCryptoKey } from '@cdktn/provider-google'

const dataGoogleKmsCryptoKeyPrimary: dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimary = { ... }
```


### DataGoogleKmsCryptoKeyVersionTemplate <a name="DataGoogleKmsCryptoKeyVersionTemplate" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplate.Initializer"></a>

```typescript
import { dataGoogleKmsCryptoKey } from '@cdktn/provider-google'

const dataGoogleKmsCryptoKeyVersionTemplate: dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplate = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleKmsCryptoKeyPrimaryList <a name="DataGoogleKmsCryptoKeyPrimaryList" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.Initializer"></a>

```typescript
import { dataGoogleKmsCryptoKey } from '@cdktn/provider-google'

new dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.get"></a>

```typescript
public get(index: number): DataGoogleKmsCryptoKeyPrimaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleKmsCryptoKeyPrimaryOutputReference <a name="DataGoogleKmsCryptoKeyPrimaryOutputReference" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer"></a>

```typescript
import { dataGoogleKmsCryptoKey } from '@cdktn/provider-google'

new dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimary">DataGoogleKmsCryptoKeyPrimary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleKmsCryptoKeyPrimary;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimary">DataGoogleKmsCryptoKeyPrimary</a>

---


### DataGoogleKmsCryptoKeyVersionTemplateList <a name="DataGoogleKmsCryptoKeyVersionTemplateList" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer"></a>

```typescript
import { dataGoogleKmsCryptoKey } from '@cdktn/provider-google'

new dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.get"></a>

```typescript
public get(index: number): DataGoogleKmsCryptoKeyVersionTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleKmsCryptoKeyVersionTemplateOutputReference <a name="DataGoogleKmsCryptoKeyVersionTemplateOutputReference" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer"></a>

```typescript
import { dataGoogleKmsCryptoKey } from '@cdktn/provider-google'

new dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel">protectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplate">DataGoogleKmsCryptoKeyVersionTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `protectionLevel`<sup>Required</sup> <a name="protectionLevel" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel"></a>

```typescript
public readonly protectionLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleKmsCryptoKeyVersionTemplate;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplate">DataGoogleKmsCryptoKeyVersionTemplate</a>

---



