# `dataGoogleDiscoveryEngineDataStores` Submodule <a name="`dataGoogleDiscoveryEngineDataStores` Submodule" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDiscoveryEngineDataStores <a name="DataGoogleDiscoveryEngineDataStores" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_data_stores google_discovery_engine_data_stores}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStores } from '@cdktn/provider-google'

new dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores(scope: Construct, id: string, config?: DataGoogleDiscoveryEngineDataStoresConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig">DataGoogleDiscoveryEngineDataStoresConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig">DataGoogleDiscoveryEngineDataStoresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleDiscoveryEngineDataStores resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isConstruct"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStores } from '@cdktn/provider-google'

dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformElement"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStores } from '@cdktn/provider-google'

dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformDataSource"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStores } from '@cdktn/provider-google'

dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStores } from '@cdktn/provider-google'

dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleDiscoveryEngineDataStores resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleDiscoveryEngineDataStores to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleDiscoveryEngineDataStores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_data_stores#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleDiscoveryEngineDataStores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.dataStores">dataStores</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList">DataGoogleDiscoveryEngineDataStoresDataStoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `dataStores`<sup>Required</sup> <a name="dataStores" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.dataStores"></a>

```typescript
public readonly dataStores: DataGoogleDiscoveryEngineDataStoresDataStoresList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList">DataGoogleDiscoveryEngineDataStoresDataStoresList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDiscoveryEngineDataStoresConfig <a name="DataGoogleDiscoveryEngineDataStoresConfig" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStores } from '@cdktn/provider-google'

const dataGoogleDiscoveryEngineDataStoresConfig: dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_data_stores#id DataGoogleDiscoveryEngineDataStores#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the data stores reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_data_stores#id DataGoogleDiscoveryEngineDataStores#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the data stores reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_data_stores#location DataGoogleDiscoveryEngineDataStores#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_data_stores#project DataGoogleDiscoveryEngineDataStores#project}

---

### DataGoogleDiscoveryEngineDataStoresDataStores <a name="DataGoogleDiscoveryEngineDataStoresDataStores" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStores } from '@cdktn/provider-google'

const dataGoogleDiscoveryEngineDataStoresDataStores: dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleDiscoveryEngineDataStoresDataStoresList <a name="DataGoogleDiscoveryEngineDataStoresDataStoresList" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStores } from '@cdktn/provider-google'

new dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.get"></a>

```typescript
public get(index: number): DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference <a name="DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStores } from '@cdktn/provider-google'

new dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.contentConfig">contentConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.dataStoreId">dataStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.defaultSchemaId">defaultSchemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.industryVertical">industryVertical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.solutionTypes">solutionTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores">DataGoogleDiscoveryEngineDataStoresDataStores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentConfig`<sup>Required</sup> <a name="contentConfig" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.contentConfig"></a>

```typescript
public readonly contentConfig: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataStoreId`<sup>Required</sup> <a name="dataStoreId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.dataStoreId"></a>

```typescript
public readonly dataStoreId: string;
```

- *Type:* string

---

##### `defaultSchemaId`<sup>Required</sup> <a name="defaultSchemaId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.defaultSchemaId"></a>

```typescript
public readonly defaultSchemaId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `industryVertical`<sup>Required</sup> <a name="industryVertical" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.industryVertical"></a>

```typescript
public readonly industryVertical: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `solutionTypes`<sup>Required</sup> <a name="solutionTypes" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.solutionTypes"></a>

```typescript
public readonly solutionTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDiscoveryEngineDataStoresDataStores;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores">DataGoogleDiscoveryEngineDataStoresDataStores</a>

---



