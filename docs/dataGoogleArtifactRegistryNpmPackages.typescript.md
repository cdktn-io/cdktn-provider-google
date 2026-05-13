# `dataGoogleArtifactRegistryNpmPackages` Submodule <a name="`dataGoogleArtifactRegistryNpmPackages` Submodule" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryNpmPackages <a name="DataGoogleArtifactRegistryNpmPackages" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages google_artifact_registry_npm_packages}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryNpmPackages } from '@cdktn/provider-google'

new dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages(scope: Construct, id: string, config: DataGoogleArtifactRegistryNpmPackagesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig">DataGoogleArtifactRegistryNpmPackagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig">DataGoogleArtifactRegistryNpmPackagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleArtifactRegistryNpmPackages resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isConstruct"></a>

```typescript
import { dataGoogleArtifactRegistryNpmPackages } from '@cdktn/provider-google'

dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformElement"></a>

```typescript
import { dataGoogleArtifactRegistryNpmPackages } from '@cdktn/provider-google'

dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformDataSource"></a>

```typescript
import { dataGoogleArtifactRegistryNpmPackages } from '@cdktn/provider-google'

dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport"></a>

```typescript
import { dataGoogleArtifactRegistryNpmPackages } from '@cdktn/provider-google'

dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleArtifactRegistryNpmPackages resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleArtifactRegistryNpmPackages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleArtifactRegistryNpmPackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryNpmPackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.npmPackages">npmPackages</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList">DataGoogleArtifactRegistryNpmPackagesNpmPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `npmPackages`<sup>Required</sup> <a name="npmPackages" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.npmPackages"></a>

```typescript
public readonly npmPackages: DataGoogleArtifactRegistryNpmPackagesNpmPackagesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList">DataGoogleArtifactRegistryNpmPackagesNpmPackagesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryNpmPackagesConfig <a name="DataGoogleArtifactRegistryNpmPackagesConfig" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryNpmPackages } from '@cdktn/provider-google'

const dataGoogleArtifactRegistryNpmPackagesConfig: dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#location DataGoogleArtifactRegistryNpmPackages#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#repository_id DataGoogleArtifactRegistryNpmPackages#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#id DataGoogleArtifactRegistryNpmPackages#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#project DataGoogleArtifactRegistryNpmPackages#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#location DataGoogleArtifactRegistryNpmPackages#location}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#repository_id DataGoogleArtifactRegistryNpmPackages#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#id DataGoogleArtifactRegistryNpmPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#project DataGoogleArtifactRegistryNpmPackages#project}.

---

### DataGoogleArtifactRegistryNpmPackagesNpmPackages <a name="DataGoogleArtifactRegistryNpmPackagesNpmPackages" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackages.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryNpmPackages } from '@cdktn/provider-google'

const dataGoogleArtifactRegistryNpmPackagesNpmPackages: dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackages = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryNpmPackagesNpmPackagesList <a name="DataGoogleArtifactRegistryNpmPackagesNpmPackagesList" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryNpmPackages } from '@cdktn/provider-google'

new dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.get"></a>

```typescript
public get(index: number): DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference <a name="DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryNpmPackages } from '@cdktn/provider-google'

new dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackages">DataGoogleArtifactRegistryNpmPackagesNpmPackages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleArtifactRegistryNpmPackagesNpmPackages;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackages">DataGoogleArtifactRegistryNpmPackagesNpmPackages</a>

---



