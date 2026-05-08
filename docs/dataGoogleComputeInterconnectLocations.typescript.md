# `dataGoogleComputeInterconnectLocations` Submodule <a name="`dataGoogleComputeInterconnectLocations` Submodule" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeInterconnectLocations <a name="DataGoogleComputeInterconnectLocations" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/compute_interconnect_locations google_compute_interconnect_locations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.Initializer"></a>

```typescript
import { dataGoogleComputeInterconnectLocations } from '@cdktn/provider-google'

new dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations(scope: Construct, id: string, config?: DataGoogleComputeInterconnectLocationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig">DataGoogleComputeInterconnectLocationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig">DataGoogleComputeInterconnectLocationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeInterconnectLocations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.isConstruct"></a>

```typescript
import { dataGoogleComputeInterconnectLocations } from '@cdktn/provider-google'

dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.isTerraformElement"></a>

```typescript
import { dataGoogleComputeInterconnectLocations } from '@cdktn/provider-google'

dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeInterconnectLocations } from '@cdktn/provider-google'

dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeInterconnectLocations } from '@cdktn/provider-google'

dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleComputeInterconnectLocations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeInterconnectLocations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeInterconnectLocations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/compute_interconnect_locations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeInterconnectLocations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.locations">locations</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList">DataGoogleComputeInterconnectLocationsLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.locations"></a>

```typescript
public readonly locations: DataGoogleComputeInterconnectLocationsLocationsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList">DataGoogleComputeInterconnectLocationsLocationsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeInterconnectLocationsConfig <a name="DataGoogleComputeInterconnectLocationsConfig" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.Initializer"></a>

```typescript
import { dataGoogleComputeInterconnectLocations } from '@cdktn/provider-google'

const dataGoogleComputeInterconnectLocationsConfig: dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/compute_interconnect_locations#id DataGoogleComputeInterconnectLocations#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/compute_interconnect_locations#project DataGoogleComputeInterconnectLocations#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/compute_interconnect_locations#id DataGoogleComputeInterconnectLocations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/compute_interconnect_locations#project DataGoogleComputeInterconnectLocations#project}.

---

### DataGoogleComputeInterconnectLocationsLocations <a name="DataGoogleComputeInterconnectLocationsLocations" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocations.Initializer"></a>

```typescript
import { dataGoogleComputeInterconnectLocations } from '@cdktn/provider-google'

const dataGoogleComputeInterconnectLocationsLocations: dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeInterconnectLocationsLocationsList <a name="DataGoogleComputeInterconnectLocationsLocationsList" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.Initializer"></a>

```typescript
import { dataGoogleComputeInterconnectLocations } from '@cdktn/provider-google'

new dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInterconnectLocationsLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInterconnectLocationsLocationsOutputReference <a name="DataGoogleComputeInterconnectLocationsLocationsOutputReference" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInterconnectLocations } from '@cdktn/provider-google'

new dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.availableFeatures">availableFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.availableLinkTypes">availableLinkTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.continent">continent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.facilityProvider">facilityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.facilityProviderFacilityId">facilityProviderFacilityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.peeringdbFacilityId">peeringdbFacilityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.supportsPzs">supportsPzs</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocations">DataGoogleComputeInterconnectLocationsLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availableFeatures`<sup>Required</sup> <a name="availableFeatures" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.availableFeatures"></a>

```typescript
public readonly availableFeatures: string[];
```

- *Type:* string[]

---

##### `availableLinkTypes`<sup>Required</sup> <a name="availableLinkTypes" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.availableLinkTypes"></a>

```typescript
public readonly availableLinkTypes: string[];
```

- *Type:* string[]

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `continent`<sup>Required</sup> <a name="continent" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.continent"></a>

```typescript
public readonly continent: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `facilityProvider`<sup>Required</sup> <a name="facilityProvider" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.facilityProvider"></a>

```typescript
public readonly facilityProvider: string;
```

- *Type:* string

---

##### `facilityProviderFacilityId`<sup>Required</sup> <a name="facilityProviderFacilityId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.facilityProviderFacilityId"></a>

```typescript
public readonly facilityProviderFacilityId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peeringdbFacilityId`<sup>Required</sup> <a name="peeringdbFacilityId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.peeringdbFacilityId"></a>

```typescript
public readonly peeringdbFacilityId: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `supportsPzs`<sup>Required</sup> <a name="supportsPzs" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.supportsPzs"></a>

```typescript
public readonly supportsPzs: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInterconnectLocationsLocations;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocations.DataGoogleComputeInterconnectLocationsLocations">DataGoogleComputeInterconnectLocationsLocations</a>

---



