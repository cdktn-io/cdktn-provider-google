# `dataGoogleComputeStoragePool` Submodule <a name="`dataGoogleComputeStoragePool` Submodule" id="@cdktn/provider-google.dataGoogleComputeStoragePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeStoragePool <a name="DataGoogleComputeStoragePool" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_storage_pool google_compute_storage_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.Initializer"></a>

```typescript
import { dataGoogleComputeStoragePool } from '@cdktn/provider-google'

new dataGoogleComputeStoragePool.DataGoogleComputeStoragePool(scope: Construct, id: string, config: DataGoogleComputeStoragePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig">DataGoogleComputeStoragePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig">DataGoogleComputeStoragePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeStoragePool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isConstruct"></a>

```typescript
import { dataGoogleComputeStoragePool } from '@cdktn/provider-google'

dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isTerraformElement"></a>

```typescript
import { dataGoogleComputeStoragePool } from '@cdktn/provider-google'

dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeStoragePool } from '@cdktn/provider-google'

dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeStoragePool } from '@cdktn/provider-google'

dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleComputeStoragePool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeStoragePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeStoragePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_storage_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeStoragePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.capacityProvisioningType">capacityProvisioningType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.deletionProtection">deletionProtection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList">DataGoogleComputeStoragePoolParamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.performanceProvisioningType">performanceProvisioningType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.poolProvisionedCapacityGb">poolProvisionedCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.poolProvisionedIops">poolProvisionedIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.poolProvisionedThroughput">poolProvisionedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.resourceStatus">resourceStatus</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList">DataGoogleComputeStoragePoolResourceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.status">status</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList">DataGoogleComputeStoragePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.storagePoolType">storagePoolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `capacityProvisioningType`<sup>Required</sup> <a name="capacityProvisioningType" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.capacityProvisioningType"></a>

```typescript
public readonly capacityProvisioningType: string;
```

- *Type:* string

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.params"></a>

```typescript
public readonly params: DataGoogleComputeStoragePoolParamsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList">DataGoogleComputeStoragePoolParamsList</a>

---

##### `performanceProvisioningType`<sup>Required</sup> <a name="performanceProvisioningType" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.performanceProvisioningType"></a>

```typescript
public readonly performanceProvisioningType: string;
```

- *Type:* string

---

##### `poolProvisionedCapacityGb`<sup>Required</sup> <a name="poolProvisionedCapacityGb" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.poolProvisionedCapacityGb"></a>

```typescript
public readonly poolProvisionedCapacityGb: string;
```

- *Type:* string

---

##### `poolProvisionedIops`<sup>Required</sup> <a name="poolProvisionedIops" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.poolProvisionedIops"></a>

```typescript
public readonly poolProvisionedIops: string;
```

- *Type:* string

---

##### `poolProvisionedThroughput`<sup>Required</sup> <a name="poolProvisionedThroughput" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.poolProvisionedThroughput"></a>

```typescript
public readonly poolProvisionedThroughput: string;
```

- *Type:* string

---

##### `resourceStatus`<sup>Required</sup> <a name="resourceStatus" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.resourceStatus"></a>

```typescript
public readonly resourceStatus: DataGoogleComputeStoragePoolResourceStatusList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList">DataGoogleComputeStoragePoolResourceStatusList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.status"></a>

```typescript
public readonly status: DataGoogleComputeStoragePoolStatusList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList">DataGoogleComputeStoragePoolStatusList</a>

---

##### `storagePoolType`<sup>Required</sup> <a name="storagePoolType" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.storagePoolType"></a>

```typescript
public readonly storagePoolType: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeStoragePoolConfig <a name="DataGoogleComputeStoragePoolConfig" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.Initializer"></a>

```typescript
import { dataGoogleComputeStoragePool } from '@cdktn/provider-google'

const dataGoogleComputeStoragePoolConfig: dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.zone">zone</a></code> | <code>string</code> | A reference to the zone where the storage pool resides. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_storage_pool#project DataGoogleComputeStoragePool#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
which means the first character must be a lowercase letter,
and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_storage_pool#name DataGoogleComputeStoragePool#name}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

A reference to the zone where the storage pool resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_storage_pool#zone DataGoogleComputeStoragePool#zone}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_storage_pool#project DataGoogleComputeStoragePool#project}.

---

### DataGoogleComputeStoragePoolParams <a name="DataGoogleComputeStoragePoolParams" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParams.Initializer"></a>

```typescript
import { dataGoogleComputeStoragePool } from '@cdktn/provider-google'

const dataGoogleComputeStoragePoolParams: dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParams = { ... }
```


### DataGoogleComputeStoragePoolResourceStatus <a name="DataGoogleComputeStoragePoolResourceStatus" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatus.Initializer"></a>

```typescript
import { dataGoogleComputeStoragePool } from '@cdktn/provider-google'

const dataGoogleComputeStoragePoolResourceStatus: dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatus = { ... }
```


### DataGoogleComputeStoragePoolStatus <a name="DataGoogleComputeStoragePoolStatus" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatus.Initializer"></a>

```typescript
import { dataGoogleComputeStoragePool } from '@cdktn/provider-google'

const dataGoogleComputeStoragePoolStatus: dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatus = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeStoragePoolParamsList <a name="DataGoogleComputeStoragePoolParamsList" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.Initializer"></a>

```typescript
import { dataGoogleComputeStoragePool } from '@cdktn/provider-google'

new dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeStoragePoolParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeStoragePoolParamsOutputReference <a name="DataGoogleComputeStoragePoolParamsOutputReference" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeStoragePool } from '@cdktn/provider-google'

new dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParams">DataGoogleComputeStoragePoolParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeStoragePoolParams;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParams">DataGoogleComputeStoragePoolParams</a>

---


### DataGoogleComputeStoragePoolResourceStatusList <a name="DataGoogleComputeStoragePoolResourceStatusList" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.Initializer"></a>

```typescript
import { dataGoogleComputeStoragePool } from '@cdktn/provider-google'

new dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.get"></a>

```typescript
public get(index: number): DataGoogleComputeStoragePoolResourceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeStoragePoolResourceStatusOutputReference <a name="DataGoogleComputeStoragePoolResourceStatusOutputReference" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeStoragePool } from '@cdktn/provider-google'

new dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.diskCount">diskCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.lastResizeTimestamp">lastResizeTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb">maxTotalProvisionedDiskCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedCapacityBytes">poolUsedCapacityBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedIops">poolUsedIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedThroughput">poolUsedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.poolUserWrittenBytes">poolUserWrittenBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskCapacityGb">totalProvisionedDiskCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskIops">totalProvisionedDiskIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskThroughput">totalProvisionedDiskThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatus">DataGoogleComputeStoragePoolResourceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskCount`<sup>Required</sup> <a name="diskCount" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.diskCount"></a>

```typescript
public readonly diskCount: string;
```

- *Type:* string

---

##### `lastResizeTimestamp`<sup>Required</sup> <a name="lastResizeTimestamp" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.lastResizeTimestamp"></a>

```typescript
public readonly lastResizeTimestamp: string;
```

- *Type:* string

---

##### `maxTotalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="maxTotalProvisionedDiskCapacityGb" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb"></a>

```typescript
public readonly maxTotalProvisionedDiskCapacityGb: string;
```

- *Type:* string

---

##### `poolUsedCapacityBytes`<sup>Required</sup> <a name="poolUsedCapacityBytes" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedCapacityBytes"></a>

```typescript
public readonly poolUsedCapacityBytes: string;
```

- *Type:* string

---

##### `poolUsedIops`<sup>Required</sup> <a name="poolUsedIops" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedIops"></a>

```typescript
public readonly poolUsedIops: string;
```

- *Type:* string

---

##### `poolUsedThroughput`<sup>Required</sup> <a name="poolUsedThroughput" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedThroughput"></a>

```typescript
public readonly poolUsedThroughput: string;
```

- *Type:* string

---

##### `poolUserWrittenBytes`<sup>Required</sup> <a name="poolUserWrittenBytes" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.poolUserWrittenBytes"></a>

```typescript
public readonly poolUserWrittenBytes: string;
```

- *Type:* string

---

##### `totalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="totalProvisionedDiskCapacityGb" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskCapacityGb"></a>

```typescript
public readonly totalProvisionedDiskCapacityGb: string;
```

- *Type:* string

---

##### `totalProvisionedDiskIops`<sup>Required</sup> <a name="totalProvisionedDiskIops" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskIops"></a>

```typescript
public readonly totalProvisionedDiskIops: string;
```

- *Type:* string

---

##### `totalProvisionedDiskThroughput`<sup>Required</sup> <a name="totalProvisionedDiskThroughput" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskThroughput"></a>

```typescript
public readonly totalProvisionedDiskThroughput: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeStoragePoolResourceStatus;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatus">DataGoogleComputeStoragePoolResourceStatus</a>

---


### DataGoogleComputeStoragePoolStatusList <a name="DataGoogleComputeStoragePoolStatusList" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.Initializer"></a>

```typescript
import { dataGoogleComputeStoragePool } from '@cdktn/provider-google'

new dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.get"></a>

```typescript
public get(index: number): DataGoogleComputeStoragePoolStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeStoragePoolStatusOutputReference <a name="DataGoogleComputeStoragePoolStatusOutputReference" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeStoragePool } from '@cdktn/provider-google'

new dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.diskCount">diskCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.lastResizeTimestamp">lastResizeTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb">maxTotalProvisionedDiskCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.poolUsedCapacityBytes">poolUsedCapacityBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.poolUsedIops">poolUsedIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.poolUsedThroughput">poolUsedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.poolUserWrittenBytes">poolUserWrittenBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskCapacityGb">totalProvisionedDiskCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskIops">totalProvisionedDiskIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskThroughput">totalProvisionedDiskThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatus">DataGoogleComputeStoragePoolStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskCount`<sup>Required</sup> <a name="diskCount" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.diskCount"></a>

```typescript
public readonly diskCount: string;
```

- *Type:* string

---

##### `lastResizeTimestamp`<sup>Required</sup> <a name="lastResizeTimestamp" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.lastResizeTimestamp"></a>

```typescript
public readonly lastResizeTimestamp: string;
```

- *Type:* string

---

##### `maxTotalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="maxTotalProvisionedDiskCapacityGb" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb"></a>

```typescript
public readonly maxTotalProvisionedDiskCapacityGb: string;
```

- *Type:* string

---

##### `poolUsedCapacityBytes`<sup>Required</sup> <a name="poolUsedCapacityBytes" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.poolUsedCapacityBytes"></a>

```typescript
public readonly poolUsedCapacityBytes: string;
```

- *Type:* string

---

##### `poolUsedIops`<sup>Required</sup> <a name="poolUsedIops" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.poolUsedIops"></a>

```typescript
public readonly poolUsedIops: string;
```

- *Type:* string

---

##### `poolUsedThroughput`<sup>Required</sup> <a name="poolUsedThroughput" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.poolUsedThroughput"></a>

```typescript
public readonly poolUsedThroughput: string;
```

- *Type:* string

---

##### `poolUserWrittenBytes`<sup>Required</sup> <a name="poolUserWrittenBytes" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.poolUserWrittenBytes"></a>

```typescript
public readonly poolUserWrittenBytes: string;
```

- *Type:* string

---

##### `totalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="totalProvisionedDiskCapacityGb" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskCapacityGb"></a>

```typescript
public readonly totalProvisionedDiskCapacityGb: string;
```

- *Type:* string

---

##### `totalProvisionedDiskIops`<sup>Required</sup> <a name="totalProvisionedDiskIops" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskIops"></a>

```typescript
public readonly totalProvisionedDiskIops: string;
```

- *Type:* string

---

##### `totalProvisionedDiskThroughput`<sup>Required</sup> <a name="totalProvisionedDiskThroughput" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskThroughput"></a>

```typescript
public readonly totalProvisionedDiskThroughput: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeStoragePoolStatus;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatus">DataGoogleComputeStoragePoolStatus</a>

---



