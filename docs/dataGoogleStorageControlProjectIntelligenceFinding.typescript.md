# `dataGoogleStorageControlProjectIntelligenceFinding` Submodule <a name="`dataGoogleStorageControlProjectIntelligenceFinding` Submodule" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlProjectIntelligenceFinding <a name="DataGoogleStorageControlProjectIntelligenceFinding" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_project_intelligence_finding google_storage_control_project_intelligence_finding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding(scope: Construct, id: string, config: DataGoogleStorageControlProjectIntelligenceFindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig">DataGoogleStorageControlProjectIntelligenceFindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig">DataGoogleStorageControlProjectIntelligenceFindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isConstruct"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isTerraformElement"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isTerraformDataSource"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.generateConfigForImport"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceFinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleStorageControlProjectIntelligenceFinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_project_intelligence_finding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceFinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.associatedResources">associatedResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.coldlineAndArchivalStorageOperationsSpike">coldlineAndArchivalStorageOperationsSpike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.crossRegionEgressSpike">crossRegionEgressSpike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.observationPeriod">observationPeriod</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.storageGrowthAboveTrend">storageGrowthAboveTrend</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.targetResource">targetResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.throttledRequestsSpike">throttledRequestsSpike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.findingIdInput">findingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.findingId">findingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `associatedResources`<sup>Required</sup> <a name="associatedResources" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.associatedResources"></a>

```typescript
public readonly associatedResources: string[];
```

- *Type:* string[]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `coldlineAndArchivalStorageOperationsSpike`<sup>Required</sup> <a name="coldlineAndArchivalStorageOperationsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.coldlineAndArchivalStorageOperationsSpike"></a>

```typescript
public readonly coldlineAndArchivalStorageOperationsSpike: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `crossRegionEgressSpike`<sup>Required</sup> <a name="crossRegionEgressSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.crossRegionEgressSpike"></a>

```typescript
public readonly crossRegionEgressSpike: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `observationPeriod`<sup>Required</sup> <a name="observationPeriod" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.observationPeriod"></a>

```typescript
public readonly observationPeriod: DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `storageGrowthAboveTrend`<sup>Required</sup> <a name="storageGrowthAboveTrend" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.storageGrowthAboveTrend"></a>

```typescript
public readonly storageGrowthAboveTrend: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList</a>

---

##### `targetResource`<sup>Required</sup> <a name="targetResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.targetResource"></a>

```typescript
public readonly targetResource: string;
```

- *Type:* string

---

##### `throttledRequestsSpike`<sup>Required</sup> <a name="throttledRequestsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.throttledRequestsSpike"></a>

```typescript
public readonly throttledRequestsSpike: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `findingIdInput`<sup>Optional</sup> <a name="findingIdInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.findingIdInput"></a>

```typescript
public readonly findingIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `findingId`<sup>Required</sup> <a name="findingId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.findingId"></a>

```typescript
public readonly findingId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingConfig <a name="DataGoogleStorageControlProjectIntelligenceFindingConfig" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingConfig: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.findingId">findingId</a></code> | <code>string</code> | The ID of the intelligence finding. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_project_intelligence_finding#id DataGoogleStorageControlProjectIntelligenceFinding#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.location">location</a></code> | <code>string</code> | The location of the intelligence finding. Currently default value is global and users cannot use for input for now. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `findingId`<sup>Required</sup> <a name="findingId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.findingId"></a>

```typescript
public readonly findingId: string;
```

- *Type:* string

The ID of the intelligence finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_project_intelligence_finding#finding_id DataGoogleStorageControlProjectIntelligenceFinding#finding_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_project_intelligence_finding#id DataGoogleStorageControlProjectIntelligenceFinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the intelligence finding. Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_project_intelligence_finding#location DataGoogleStorageControlProjectIntelligenceFinding#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_project_intelligence_finding#project DataGoogleStorageControlProjectIntelligenceFinding#project}

---

### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod <a name="DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingObservationPeriod: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes = { ... }
```


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

const dataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError: dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets">topBuckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease"></a>

```typescript
public readonly percentageIncrease: number;
```

- *Type:* number

---

##### `topBuckets`<sup>Required</sup> <a name="topBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets"></a>

```typescript
public readonly topBuckets: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a>

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount"></a>

```typescript
public readonly totalOperationsCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes">topPrefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topPrefixes`<sup>Required</sup> <a name="topPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```typescript
public readonly topPrefixes: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```typescript
public readonly percentageIncrease: number;
```

- *Type:* number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```typescript
public readonly throttledRequests: string;
```

- *Type:* string

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```typescript
public readonly totalEgressBytes: string;
```

- *Type:* string

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```typescript
public readonly totalOperationsCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">totalStorageGrowthBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution"></a>

```typescript
public readonly contribution: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error"></a>

```typescript
public readonly error: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a>

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```typescript
public readonly percentageIncrease: number;
```

- *Type:* number

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```typescript
public readonly throttledRequests: string;
```

- *Type:* string

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```typescript
public readonly totalEgressBytes: string;
```

- *Type:* string

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```typescript
public readonly totalOperationsCount: string;
```

- *Type:* string

---

##### `totalStorageGrowthBytes`<sup>Required</sup> <a name="totalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```typescript
public readonly totalStorageGrowthBytes: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.topBuckets">topBuckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.percentageIncrease"></a>

```typescript
public readonly percentageIncrease: number;
```

- *Type:* number

---

##### `topBuckets`<sup>Required</sup> <a name="topBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.topBuckets"></a>

```typescript
public readonly topBuckets: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList</a>

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.totalEgressBytes"></a>

```typescript
public readonly totalEgressBytes: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes">topPrefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topPrefixes`<sup>Required</sup> <a name="topPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```typescript
public readonly topPrefixes: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```typescript
public readonly percentageIncrease: number;
```

- *Type:* number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```typescript
public readonly throttledRequests: string;
```

- *Type:* string

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```typescript
public readonly totalEgressBytes: string;
```

- *Type:* string

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```typescript
public readonly totalOperationsCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">totalStorageGrowthBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution"></a>

```typescript
public readonly contribution: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.error"></a>

```typescript
public readonly error: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList</a>

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```typescript
public readonly percentageIncrease: number;
```

- *Type:* number

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```typescript
public readonly throttledRequests: string;
```

- *Type:* string

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```typescript
public readonly totalEgressBytes: string;
```

- *Type:* string

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```typescript
public readonly totalOperationsCount: string;
```

- *Type:* string

---

##### `totalStorageGrowthBytes`<sup>Required</sup> <a name="totalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```typescript
public readonly totalStorageGrowthBytes: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList <a name="DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.topBuckets">topBuckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes">totalStorageGrowthBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.percentageIncrease"></a>

```typescript
public readonly percentageIncrease: number;
```

- *Type:* number

---

##### `topBuckets`<sup>Required</sup> <a name="topBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.topBuckets"></a>

```typescript
public readonly topBuckets: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList</a>

---

##### `totalStorageGrowthBytes`<sup>Required</sup> <a name="totalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes"></a>

```typescript
public readonly totalStorageGrowthBytes: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes">topPrefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topPrefixes`<sup>Required</sup> <a name="topPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes"></a>

```typescript
public readonly topPrefixes: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```typescript
public readonly percentageIncrease: number;
```

- *Type:* number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```typescript
public readonly throttledRequests: string;
```

- *Type:* string

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```typescript
public readonly totalEgressBytes: string;
```

- *Type:* string

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```typescript
public readonly totalOperationsCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes">totalStorageGrowthBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution"></a>

```typescript
public readonly contribution: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.error"></a>

```typescript
public readonly error: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList</a>

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease"></a>

```typescript
public readonly percentageIncrease: number;
```

- *Type:* number

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests"></a>

```typescript
public readonly throttledRequests: string;
```

- *Type:* string

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes"></a>

```typescript
public readonly totalEgressBytes: string;
```

- *Type:* string

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount"></a>

```typescript
public readonly totalOperationsCount: string;
```

- *Type:* string

---

##### `totalStorageGrowthBytes`<sup>Required</sup> <a name="totalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```typescript
public readonly totalStorageGrowthBytes: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.topBuckets">topBuckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.percentageIncrease"></a>

```typescript
public readonly percentageIncrease: number;
```

- *Type:* number

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.throttledRequests"></a>

```typescript
public readonly throttledRequests: string;
```

- *Type:* string

---

##### `topBuckets`<sup>Required</sup> <a name="topBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.topBuckets"></a>

```typescript
public readonly topBuckets: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes">topPrefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topPrefixes`<sup>Required</sup> <a name="topPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```typescript
public readonly topPrefixes: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```typescript
public readonly percentageIncrease: number;
```

- *Type:* number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```typescript
public readonly throttledRequests: string;
```

- *Type:* string

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```typescript
public readonly totalEgressBytes: string;
```

- *Type:* string

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```typescript
public readonly totalOperationsCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceFinding } from '@cdktn/provider-google'

new dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">totalStorageGrowthBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.contribution"></a>

```typescript
public readonly contribution: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.error"></a>

```typescript
public readonly error: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList</a>

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```typescript
public readonly percentageIncrease: number;
```

- *Type:* number

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```typescript
public readonly throttledRequests: string;
```

- *Type:* string

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```typescript
public readonly totalEgressBytes: string;
```

- *Type:* string

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```typescript
public readonly totalOperationsCount: string;
```

- *Type:* string

---

##### `totalStorageGrowthBytes`<sup>Required</sup> <a name="totalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```typescript
public readonly totalStorageGrowthBytes: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets</a>

---



